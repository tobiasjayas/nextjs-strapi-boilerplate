FROM strapi/base

COPY ./app/package.json ./
COPY ./app/yarn.lock ./

RUN yarn install

COPY ./app .

ENV NODE_ENV development

# RUN yarn build

EXPOSE 1337

CMD ["yarn", "develop"]
