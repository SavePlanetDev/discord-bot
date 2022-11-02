FROM node
WORKDIR /whos-hodl-verify2
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

