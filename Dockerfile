FROM node:latest AS build
WORKDIR /app
COPY  package-lock.json /app
COPY  package.json  /app
 
## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
# RUN npm i -g npm
# RUN npm install -g @angular/cli
# RUN npm update
# # run npm update
RUN npm install
RUN npm install -g angular/cli@latest
RUN ng update
RUN install @angular-devkit/build-angular
RUN npm install --save-dev @angular-devkit/build-angular  
# and finally,
 
RUN npm update
 
COPY  . .
RUN npm run build  
 

FROM nginx:1.17.1-alpine

COPY --from=build   /app/dist/projects-Detail /usr/share/nginx/html
  