FROM caddy:2.6.4-alpine

# copy files
ADD src /build/src
COPY index.html /build/index.html
COPY package-lock.json /build/package-lock.json
COPY package.json /build/package.json
COPY secrets.json /build/secrets.json
COPY tsconfig.json /build/tsconfig.json
COPY vite.config.ts /build/vite.config.ts

# copy Caddyfile & ssl
COPY caddy/Caddyfile /etc/caddy/Caddyfile
COPY caddy/cert.pem /etc/caddy/cert.pem
COPY caddy/key.pem /etc/caddy/key.pem

# install node & npm
RUN apk add nodejs npm

# set node workdir
WORKDIR /build

# build and server
RUN cd /build
RUN npm install
RUN npm run build
RUN cp -R ./dist/* /usr/share/caddy/