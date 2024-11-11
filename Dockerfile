FROM node:20 AS builder

WORKDIR /app

COPY frontend/package*.json ./frontend/
WORKDIR /app/frontend
RUN yarn install 

COPY frontend/ ./frontend/

RUN yarn build

WORKDIR /app

COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN yarn install  

COPY backend/ ./backend/

RUN yarn build

FROM node:20-buster

WORKDIR /app

COPY --from=builder /app/frontend /app/frontend
COPY --from=builder /app/backend /app/backend

WORKDIR /app/frontend
RUN yarn install --production 

WORKDIR /app/backend
RUN yarn install --production 

EXPOSE 3000 4200

CMD ["sh", "-c", "yarn run start:prod --prefix /app/backend & yarn run start --prefix /app/frontend"]
