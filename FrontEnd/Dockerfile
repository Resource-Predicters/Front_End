FROM node:18.17.1-alpine	
WORKDIR ./Front/Front_End/ResourceFront
COPY package.json .
RUN npm install --force
COPY . .
EXPOSE 3000
CMD ["npm", "start"]