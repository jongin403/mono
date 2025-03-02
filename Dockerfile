# 1. 기본 빌드 환경 설정
FROM node:22-alpine AS builder

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 패키지 매니저 설정
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && corepack prepare pnpm@latest --activate

# 4. 의존성 설치 (캐시 활용)
COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY apps/portfolio/package.json apps/portfolio/
COPY packages/ui/package.json packages/ui/

RUN pnpm install --frozen-lockfile

# 5. 프로젝트 코드 복사 및 빌드
COPY . .
RUN pnpm run build --filter=portfolio

# 6. 실행 환경 설정
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/apps/portfolio/.next ./.next
COPY --from=builder /app/apps/portfolio/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages ./packages

EXPOSE 3000

CMD ["pnpm", "run", "start"]