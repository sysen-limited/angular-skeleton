FROM ubuntu:14.04

RUN apt-get update
RUN apt-get install -y nodejs npm

COPY . /app

RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install -g bower grunt-cli
RUN cd /app; npm install --production

ENV NODE_ENV production

EXPOSE 1337
CMD [ "node", "/app/server.js" ]
