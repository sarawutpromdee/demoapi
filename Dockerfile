FROM node:14.17.4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install 

RUN ls  /usr/src/app/
CMD [ "npm", "start" ]
EXPOSE 3000