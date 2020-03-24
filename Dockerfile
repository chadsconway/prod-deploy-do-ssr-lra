FROM node:alpine as nodebase

WORKDIR '/app'
COPY package.json .
RUN  npm install
COPY . . 
