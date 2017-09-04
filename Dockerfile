FROM node:6-alpine

RUN npm install -g pm2

WORKDIR /app

ADD . /app

RUN yarn install && \
    yarn build && \
    yarn install --production

CMD ["pm2-docker", "src/backend/server.js"]
