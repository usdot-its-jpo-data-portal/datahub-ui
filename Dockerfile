FROM node:10.20.0-jessie as buildimage

WORKDIR /app

COPY . .

RUN npm install

RUN sh ./uswds-init.sh
RUN sh ./prepare-visualizations.sh

RUN node --max-old-space-size=512

RUN npm run test:unit

RUN npm run build

FROM nginx:1.17.9

WORKDIR /app

COPY --from=buildimage /app/dist .

COPY --from=buildimage /app/entrypoint.sh .

COPY nginx.template.conf /etc/nginx

CMD ["/app/entrypoint.sh"]
