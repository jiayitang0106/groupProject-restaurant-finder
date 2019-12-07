FROM node:10

WORKDIR /

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["sh", "-c", "npm run db:seed && npm start && npm run build"]