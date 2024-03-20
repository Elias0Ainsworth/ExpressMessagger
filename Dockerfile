FROM node:20-alpine as build
WORKDIR /opt/app
ADD *.json .
RUN npm ci
ADD . .
RUN npm run start

FROM node:20-alpine
WORKDIR /opt/app
COPY --from=build /opt/app .
ADD *.json .
RUN RUN npm ci --omit=dev
CMD ["node", "index.js"]