FROM node:14.0.0-alpine3.10
RUN mkdir -p /app/
COPY ./package.json /app/package.json
WORKDIR /app
RUN npm install 
RUN rm /app/package.json
VOLUME /app/node_modules