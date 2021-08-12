FROM node:latest AS build
WORKDIR /usr/src/app

RUN  npm i npm
RUN  echo "installed npm"
RUN npm install -g @angular/cli@latest
RUN npm i --only=dev

COPY package-lock.json ./
COPY package.json /app
RUN apt-get update
 
COPY  . .
RUN npm run build  
 

FROM nginx:1.17.1-alpine

COPY --from=build  /usr/src/app/dist/projects-Detail /usr/share/nginx/html
  