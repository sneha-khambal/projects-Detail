FROM node:latest AS build
WORKDIR /usr/src/app

RUN  npm i npm
 
 

COPY package-lock.json ./
COPY package.json /app
 
COPY  . .
RUN npm run build  
 

FROM nginx:1.17.1-alpine

COPY --from=build  /usr/src/app/dist/projects-Detail /usr/share/nginx/html
  