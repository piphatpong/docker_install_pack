FROM node:lts-alpine3.9

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# RUN npm run ts-build

CMD [ "node", "server.js" ]