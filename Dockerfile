FROM bitnami/apache

#Copy the files to Apache document root
COPY . /app/data/
