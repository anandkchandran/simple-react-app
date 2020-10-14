FROM node:12-alpine
COPY . ./build
RUN npm install -g serve
CMD ["serve","-s","build"]
