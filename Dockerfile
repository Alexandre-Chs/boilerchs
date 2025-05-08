FROM node:22.2-alpine3.19 as base

#All deps stage
FROM base as deps
WORKDIR /dist
ADD package.json package-lock.json ./
RUN npm ci

#Production only deps stage
FROM base as production-deps
WORKDIR /dist
ADD package.json package-lock.json ./
RUN npm ci --omit=dev

#Build stage
FROM base as build
WORKDIR /dist
COPY --from=deps /dist/node_modules /dist/node_modules
ADD . .
RUN node ace build

#Production stage
FROM base
ARG APP_RELEASE 
ENV APP_RELEASE=${APP_RELEASE}
ENV NODE_ENV=production
WORKDIR /dist
COPY --from=production-deps /dist/node_modules /dist/node_modules
COPY --from=build /dist/build /dist
EXPOSE 8080
CMD ["node", "./bin/server.js"]