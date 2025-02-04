# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=20.1.0

FROM node:${NODE_VERSION}-alpine


WORKDIR /usr/src/app

COPY . .

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.yarn to speed up subsequent builds.
# Leverage a bind mounts to package.json and yarn.lock to avoid having to copy them into
# into this layer.

RUN npm i -g pnpm prisma

RUN prisma generate

RUN pnpm i

# Compile
RUN pnpm build

# Run the application as a non-root user.
USER node

# Expose the port that the application listens on.
EXPOSE 3500

# Run the application.
CMD node ./build/index.js