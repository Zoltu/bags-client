FROM node:7

COPY package.json /app/package.json
WORKDIR /app
RUN npm install --ignore-scripts --unsafe-perm --loglevel warn
RUN chmod +x node_modules/.bin/nightwatch
COPY tests/ /app/tests/
COPY nightwatch.json /app/nightwatch.json

ENTRYPOINT ["node_modules/.bin/nightwatch", "-e", "chrome,firefox"]
