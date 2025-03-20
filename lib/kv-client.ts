// lib/kv-client.ts
import { createClient, type VercelKV } from "@vercel/kv";
import crypto from "crypto";
type SafeKey = string | number | Buffer;
type ValueType = string | number | Buffer | object;
// 自定义性能监控指标
interface KVPerfMetrics {
  successCount: number;
  failureCount: number;
  totalDuration: number;
}

class KVClient {
  private static instance: VercelKV;
  private static pool: VercelKV[] = [];
  private maxRetries: number;
  private keyPrefix: string;
  private iv: Buffer;
  private metrics: KVPerfMetrics;

  constructor() {
    // this.validateEnv();
    this.maxRetries = Number(process.env.KV_MAX_RETRIES) || 3;
    this.keyPrefix = process.env.KV_KEY_PREFIX || "prod_";
    this.iv = crypto.randomBytes(16);
    this.metrics = { successCount: 0, failureCount: 0, totalDuration: 0 };
  }

  // 新增动态密钥管理
  private async getEncryptionKey(): Promise<string> {
    if (process.env.ENCRYPTION_KEY) return process.env.ENCRYPTION_KEY;
    throw new Error("未配置加密密钥");
  }

  // // 增强环境验证
  // private validateEnv() {
  //   const missing = [];
  //   if (!process.env.KV_REST_API_URL) missing.push("KV_REST_API_URL");
  //   if (!process.env.KV_REST_API_TOKEN) missing.push("KV_REST_API_TOKEN");
  //   if (missing.length) throw new Error(`缺失环境变量: ${missing.join(", ")}`);
  // }

  // 新增连接池管理
  private getClient(): VercelKV {
    if (KVClient.pool.length < 5) {
      const client = createClient({
        url: process.env.KV_REST_API_URL!,
        token: process.env.KV_REST_API_TOKEN!,
      });
      KVClient.pool.push(client);
    }
    return KVClient.pool[Math.floor(Math.random() * KVClient.pool.length)];
  }

  // 改进的键名消毒策略
  private sanitizeKey(key: SafeKey): string {
    const sanitized = typeof key === "number" ? key.toString() : key;
    if (!/^[\w:-]{1,256}$/.test(sanitized.toString())) {
      throw new Error(`无效键名: ${sanitized.toString().slice(0, 50)}`);
    }
    return `${this.keyPrefix}${sanitized}`;
  }

  // 新增AES-256加密
  private async encryptValue(value: string): Promise<string> {
    const cipher = crypto.createCipheriv(
      "aes-256-cbc",
      await this.getEncryptionKey(),
      this.iv
    );
    return Buffer.concat([cipher.update(value), cipher.final()]).toString(
      "hex"
    );
  }

  private async decryptValue(encrypted: string): Promise<string> {
    const decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      await this.getEncryptionKey(),
      this.iv
    );
    return Buffer.concat([
      decipher.update(Buffer.from(encrypted, "hex")),
      decipher.final(),
    ]).toString();
  }

  // 新增错误包装器
  private wrapError(error: unknown): Error {
    return error instanceof Error
      ? new Error(`KV操作失败: ${error.message}`)
      : new Error("未知的KV操作错误");
  }
  private async executeWithRetry<T>(
    operation: () => Promise<T>,
    attempt = 1
  ): Promise<T> {
    try {
      const result = await operation();
      this.metrics.successCount++;
      return result;
    } catch (error) {
      this.metrics.failureCount++;
      if (attempt >= this.maxRetries) throw this.wrapError(error);
      await new Promise((resolve) => setTimeout(resolve, 100 * 2 ** attempt));
      return this.executeWithRetry(operation, attempt + 1);
    }
  }
  // 新增性能指标获取方法
  public getMetrics() {
    return {
      ...this.metrics,
      averageLatency:
        this.metrics.totalDuration / (this.metrics.successCount || 1),
      successRate:
        this.metrics.successCount /
        (this.metrics.successCount + this.metrics.failureCount),
    };
  }
  // 添加公共的 set 方法
  public async set<T = any>(
    key: SafeKey,
    value: T,
    options?: { encrypt?: boolean }
  ): Promise<void> {
    const safeKey = this.sanitizeKey(key);

    await this.executeWithRetry(async () => {
      // 处理加密逻辑
      const processedValue = options?.encrypt
        ? await this.encryptValue(JSON.stringify(value))
        : JSON.stringify(value);

      // 获取客户端连接并执行存储
      const client = this.getClient();
      return client.set(safeKey, processedValue);
    });
  }

  // 同时添加 get 方法
  public async get<T = any>(
    key: SafeKey,
    options?: { decrypt?: boolean }
  ): Promise<T | null> {
    const safeKey = this.sanitizeKey(key);

    return this.executeWithRetry(async () => {
      const client = this.getClient();
      const value:any = await client.get(safeKey);

      if (!value) return null;

      return options?.decrypt
        ? JSON.parse(await this.decryptValue(value))
        : JSON.parse(value);
    });
  }
}

export const kvClient = new KVClient();
