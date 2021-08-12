FROM node:latest AS build
WORKDIR /usr/src/app
COPY package-lock.json ./
COPY package.json /app
RUN  npm i npm
RUN  echo "installed npm"
RUN npm install -g @angular/cli@latest
COPY  . .
RUN ng build  
 

FROM nginx:1.17.1-alpine

COPY --from=build  /usr/src/app/dist/projects-Detail /usr/share/nginx/html
  