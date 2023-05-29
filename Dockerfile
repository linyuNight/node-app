FROM node:18-alpine
WORKDIR /
COPY . .
RUN yarn install
CMD ["node", "app.js"]
EXPOSE 3000