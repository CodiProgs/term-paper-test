FROM node:20-buster AS builder

WORKDIR /app

COPY backend/package*.json ./

RUN yarn install

COPY backend/ .

RUN yarn build

FROM node:20-buster

WORKDIR /app

COPY --from=builder /app ./

RUN yarn install --production

EXPOSE 4200

CMD ["yarn", "start:prod"]
