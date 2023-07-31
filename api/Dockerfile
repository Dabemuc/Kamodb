FROM node:18-alpine3.18

#copy files
ADD ssl /server/ssl
ADD Themes /server/Themes
COPY package-lock.json /server/package-lock.json
COPY package.json /server/package.json
COPY server.js /server/server.js

# set node workdir
WORKDIR /server

# serve
RUN npm install
CMD ["npm", "run", "prod"]