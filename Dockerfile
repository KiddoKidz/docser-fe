FROM node:lts-alpine

WORKDIR /app

ENV DEBUG 0

COPY . .

RUN yarn install

CMD yarn start