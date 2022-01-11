FROM node:14

WORKDIR /app/waveentry

COPY . .

EXPOSE 3000

RUN npm i

CMD ["npm" , "start"]
