FROM node:iron-alpine3.21

WORKDIR /app

EXPOSE 3000

COPY . .

RUN npm i -f

RUN npm run build

CMD npm run start