FROM node:14
RUN npm install -g json-server
COPY . /data
EXPOSE 8082
CMD ["json-server","--watch","/data/db.json","--host","0.0.0.0","-p","8082"]

