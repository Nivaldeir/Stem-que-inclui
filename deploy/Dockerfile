# Stage 1: Dependencies
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar arquivos de dependências
COPY ../../package.json ./
RUN npm install --force

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app

# Copiar dependências do stage anterior
COPY --from=deps /app/node_modules ../node_modules
COPY . .

# Build da aplicação
RUN npm run build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app


# Copiar arquivos necessários para produção
COPY --from=builder /app/public ../public
COPY --from=builder /app/.next/standalone ../
COPY --from=builder /app/.next/static ../.next/static

# Expor porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]
