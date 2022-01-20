FROM node:latest

WORKDIR /app

COPY package.json yarn.* ./

EXPOSE 3333

ENV NODE_ENV=development

RUN yarn install

COPY . ./

RUN yarn run build

CMD ["yarn", "run", "start"]
