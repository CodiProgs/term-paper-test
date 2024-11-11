FROM node:20 AS build

WORKDIR /app

# next js 
COPY frontend/package*.json ./
RUN yarn install
COPY frontend/ .
RUN yarn build
FROM node:20-buster
WORKDIR /app
COPY --from=builder /app ./
RUN yarn install --production

# nest js
COPY backend/package*.json ./
RUN yarn install
COPY backend/ .
RUN yarn build
FROM node:20-buster
WORKDIR /app
COPY --from=builder /app ./
RUN yarn install --production

EXPOSE 3000 4200

CMD ["sh", "-c", "yarn run start:prod --prefix /app/backend & yarn run start --prefix /app/frontend"]
