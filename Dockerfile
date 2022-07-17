FROM node:latest

RUN mkdir -p /usr/src/app

RUN chmod -R 777 /usr/src/app

WORKDIR /usr/src/app

ADD . /usr/src/app

COPY package*.json /usr/src/app/

COPY tsconfig.json /usr/src/app/

COPY ./src /usr/src/app/

#RUN npm config set registry https://registry.npmjs.org/

RUN yarn install

#RUN npm install -g npm@8.14.0 && npm install --legacy-peer-deps

EXPOSE 8000

CMD [ "node", "start" ]