FROM nginx:1.25.1-alpine

# copy files
ADD src /config/www/src
COPY index.html /config/www/index.html
COPY package-lock.json /config/www/package-lock.json
COPY package.json /config/www/package.json
COPY secrets.json /config/www/secrets.json
COPY tsconfig.json /config/www/tsconfig.json
COPY vite.config.ts /config/www/vite.config.ts

# copy nginx files
COPY nginx/cert.pem /config/keys/cert.pem
COPY nginx/key.pem /config/keys/key.pem
COPY nginx/dhparams.pem /etc/nginx/dhparams.pem
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/ssl.conf /etc/nginx/ssl.conf
RUN rm /etc/nginx/conf.d/default.conf

# install node & npm
RUN apk add nodejs npm

# set node workdir
WORKDIR /config/www

# build and server
RUN cd /config/www
RUN npm install
RUN npm run build
# RUN cp -R ./dist/* /usr/share/caddy/

#  FROM caddy:2.6.4-alpine

# # copy files
# ADD src /config/www/src
# COPY index.html /config/www/index.html
# COPY package-lock.json /config/www/package-lock.json
# COPY package.json /config/www/package.json
# COPY secrets.json /config/www/secrets.json
# COPY tsconfig.json /config/www/tsconfig.json
# COPY vite.config.ts /config/www/vite.config.ts

# # copy Caddyfile & ssl
# COPY caddy/Caddyfile /etc/caddy/Caddyfile
# COPY caddy/cert.pem /etc/caddy/cert.pem
# COPY caddy/key.pem /etc/caddy/key.pem

# # install node & npm
# RUN apk add nodejs npm

# # set node workdir
# WORKDIR /config/www

# # build and server
# RUN cd /config/www
# RUN npm install
# RUN npm run build
# RUN cp -R ./dist/* /usr/share/caddy/