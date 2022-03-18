FROM node:14.15.4-alpine3.12

USER node

RUN npm i -g @nestjs/cli@8.0.0

WORKDIR /home/node/app

