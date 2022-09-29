# Node image
FROM node:12.16.1-alpine

WORKDIR /app

# Copy source code
COPY . .

# install dependencies
COPY package*.json .
RUN npm ci

# build vite js app
RUN npm run build
