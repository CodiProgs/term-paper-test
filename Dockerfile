FROM node:20 AS build

WORKDIR /app

COPY backend/package.json backend/yarn.lock ./backend/
WORKDIR /app/backend
RUN yarn install  # Используем yarn для установки зависимостей

WORKDIR /app
COPY frontend/package.json frontend/yarn.lock ./frontend/
WORKDIR /app/frontend
RUN yarn install  # Используем yarn для установки зависимостей

WORKDIR /app/frontend
RUN yarn run build  # Собираем frontend с помощью yarn

WORKDIR /app/backend
RUN yarn run build  # Собираем backend с помощью yarn

WORKDIR /app

EXPOSE 3000 4200

CMD ["sh", "-c", "yarn run start:prod --prefix /app/backend & yarn run start --prefix /app/frontend"]
