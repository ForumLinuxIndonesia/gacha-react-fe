FROM node:lts-alpine as build-stage
ENV NODE_ENV production
WORKDIR /app
COPY . .
RUN npm ci --only=production && npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
