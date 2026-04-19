FROM node:24-alpine AS builder
WORKDIR /app
RUN corepack enable
COPY . .
RUN pnpm install --frozen-lockfile && pnpm run build

FROM socialengine/nginx-spa
COPY --from=builder /app/dist /app