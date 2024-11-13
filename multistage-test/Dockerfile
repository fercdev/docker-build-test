FROM node:18-alpine as build 

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

#segunda etapa
FROM build as test

RUN npm test

#tercera etapa
FROM node:18-alpine

WORKDIR /production

COPY --from=build /app /production

EXPOSE 3000

CMD [ "npm", "start" ]