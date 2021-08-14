FROM node:latest AS build
WORKDIR /usr/src/app
COPY package-lock.json ./
COPY package.json /app
 
RUN  npm i npm
RUN npm update -g @angular/cli
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force



COPY  . .
RUN npm run build  
 

FROM nginx:1.17.1-alpine

COPY --from=build  /usr/src/app/dist/projects-Detail /usr/share/nginx/html
  