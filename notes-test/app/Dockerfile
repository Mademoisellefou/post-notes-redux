FROM node:16.3.0-alpine as build
WORKDIR /app
COPY ./package.json ./
RUN npm i
RUN mkdir ./node_modules/.cache && chmod -R 777 ./node_modules/.cache
COPY . .
RUN npm run build

FROM nginx:1.14.2-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g","daemon off;"]