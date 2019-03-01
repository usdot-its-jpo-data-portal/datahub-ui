FROM bitnami/apache

#Copy the files to Apache document root
COPY ./index.html /app
COPY ./data/ /app/data/
COPY ./data/js/dot_ostr_analytics.js /app/js/dot_ostr_analytics.js
