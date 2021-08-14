FROM node:latest AS build
WORKDIR /usr/src/app
COPY package-lock.json /usr/src/app/
COPY package.json  /usr/src/app/
 

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i -g npm
RUN npm install -g @angular/cli
run npm update
 
COPY  . .
RUN npm run build  
 

FROM nginx:1.17.1-alpine

COPY --from=build  /usr/src/app/dist/projects-Detail /usr/share/nginx/html
  