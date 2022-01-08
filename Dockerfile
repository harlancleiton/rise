FROM node:alpine

WORKDIR /src

COPY package*.json ./

EXPOSE 3333

ENV NODE_ENV=development

RUN npm install

COPY . ./

RUN npm run build
CMD ["npm", "run", "start"]