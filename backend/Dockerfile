
FROM node:11-alpine

ENV NODE_ENV=development

WORKDIR /app

COPY . /app

CMD ["yarn", "start"]

RUN apk update && \
    apk add sqlite && \
    yarn
