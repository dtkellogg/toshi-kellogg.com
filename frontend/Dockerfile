# Build react client
FROM node:16

# Working directory be app
WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies

RUN rm -rf node_modules && npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm","start"]