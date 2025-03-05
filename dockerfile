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

# 阶段三：运行时镜像
FROM node:20-slim AS runner
USER node
WORKDIR /app

ENV NODE_ENV production
EXPOSE 3000

COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --from=builder --chown=node:node /app/package.json ./package.json

CMD ["npm", "start"]