FROM node:14

ENV REACT_APP_SERVER_URI=http://localhost:3001

WORKDIR /app/waveentry

COPY . .

EXPOSE 3000

RUN npm i

CMD ["npm" , "start"]