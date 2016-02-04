FROM node:argon-wheezy
COPY . /app
WORKDIR /app
RUN npm install --production
ENV PORT="80" NODE_ENV="production"
EXPOSE 80
CMD npm start