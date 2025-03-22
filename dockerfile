# 阶段一：依赖安装
FROM node:20-slim AS deps
USER root
WORKDIR /app

# 安装系统级依赖
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    build-essential \
    libssl-dev \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# 配置npm镜像源
RUN npm config set registry https://mirrors.huaweicloud.com/repository/npm/

COPY package*.json ./

# 清理缓存并安装依赖
RUN npm cache clean --force \
    && npm install

# 阶段二：构建过程
FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build \
    && npm prune --production

# 阶段四：运行时镜像
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]