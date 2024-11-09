FROM node:14-alpine

WORKDIR /app

COPY inventory_analysis_client/package*.json ./

RUN npm install

COPY inventory_analysis_client/. .

RUN npm run build

EXPOSE 5173

CMD ["npm", "start"]