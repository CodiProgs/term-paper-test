FROM node:20-buster AS builder

WORKDIR /app

COPY frontend/package*.json ./

RUN yarn install

COPY frontend/ .

RUN yarn build

FROM node:20-buster

WORKDIR /app

COPY --from=builder /app ./

RUN yarn install --production

EXPOSE 3000

CMD ["yarn", "start"]
