# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.15.0

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app
ENV NODE_ENV=production

# ------------------- Stage 1: Install dependencies -------------------
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps
#-------------------- ADD --omit=dev when publishing ot for client after development-------------
# ------------------- Stage 2: Build the application -------------------
FROM deps AS build
COPY . .
RUN npm run build

# ------------------- Stage 3: Production image -------------------
FROM base AS final
USER node

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/next.config.ts ./next.config.ts
COPY --from=build /app/tsconfig.json ./tsconfig.json
COPY --from=build /app/tailwind.config.ts ./tailwind.config.ts
COPY --from=build /app/postcss.config.js ./postcss.config.js
COPY --from=build /app/next-env.d.ts ./next-env.d.ts

# If you have other important files, copy them here too (e.g. .env.production, etc.)

EXPOSE 3000

CMD ["npm", "start"]
