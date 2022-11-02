FROM node
WORKDIR /whos-hodl-bot
COPY package.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]

