FROM node20

WORKDIR app

COPY package.json .
RUN npm install

COPY . .

RUN npx prisma generate

CMD [npx, ts-node-dev, --respawn, srcapp.ts]
