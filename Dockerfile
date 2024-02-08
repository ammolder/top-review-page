FROM node:18-alpine
WORKDIR /usr/app 
COPY ./ /usr/app
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production
CMD ["node", "./dist/main.js"]