# pull official base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# install app dependencies
ADD package.json .

# RUN yarn install
RUN yarn 

# add app
COPY . .

# start app
CMD yarn start
