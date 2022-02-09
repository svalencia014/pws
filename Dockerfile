FROM node:17
COPY package.json .
COPY . ./
EXPOSE 8080
CMD ["node", "server.js"]