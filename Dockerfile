# Node image
FROM node:14

WORKDIR /app

# vite esbuild init
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Copy source code
COPY . .

# install dependencies
COPY package*.json .
RUN npm ci

# vite esbuild - Resolving an issue with esbuild in docker container
ENTRYPOINT ["/entrypoint.sh"]

# build vite js app
RUN npm run vite:build
