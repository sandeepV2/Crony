FROM node:18-alpine as builderimage

WORKDIR /app/

COPY public /app/public
COPY src /app/src
COPY package.json /app/
COPY package-lock.json /app/
# COPY postcss.config.js /app/
# COPY tailwind.config.js /app/
# COPY tsconfig.json /app/
# COPY .env.prod /app/.env

RUN npm install
RUN npm run build
RUN npm install -g serve

# base image
# FROM docker-private.infra.cloudera.com/cloudera_thirdparty/python:3.8-rc-alpine

# RUN pip install flask

# # set working directory
# WORKDIR /app

# RUN pip install flask-cors

# COPY --from=builderimage /app/build /app
# COPY serve.py /

# # start app
# CMD python /serve.py

# EXPOSE 80

CMD ["serve", "-p", "80", "-s", "build"]

