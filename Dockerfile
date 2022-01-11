FROM node:14

WORKDIR /app/waveentry

EXPOSE 3000

COPY . .

RUN npm i

CMD [ "npm", "start" ]

