FROM node:latest AS build
WORKDIR /usr/src/app
COPY package-lock.json /usr/src/app/
COPY package.json  /usr/src/app/
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i -g npm
RUN npm install -g angularcli@12.1.4

 
COPY  . .
RUN npm run build  
 

FROM nginx:1.17.1-alpine

COPY --from=build  /usr/src/app/dist/projects-Detail /usr/share/nginx/html
  