
FROM node:11-alpine

ENV NODE_ENV=development

RUN mkdir app
WORKDIR /app

COPY . /app

RUN yarn install

CMD ["yarn", "start"]