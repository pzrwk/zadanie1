FROM node:alpine

LABEL maintainer="Piotr Pożarowszczyk"
LABEL description="Zadanie 1 z PAwCO"

COPY index* ./zad1/
COPY package.json ./zad1/

WORKDIR /zad1
RUN npm install

EXPOSE 3000
CMD ["node", "index.js"]