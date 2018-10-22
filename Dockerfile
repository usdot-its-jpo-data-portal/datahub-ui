FROM bitnami/apache

#Copy the files to Apache document root
COPY ./index.html /app
COPY ./data/ /app/data/
