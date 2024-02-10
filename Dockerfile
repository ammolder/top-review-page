FROM node:21-alpine3.18
WORKDIR /usr/app 
COPY ./ /usr/app
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
RUN npm prune --production --legacy-peer-deps
CMD ["node", "./dist/main.js"]