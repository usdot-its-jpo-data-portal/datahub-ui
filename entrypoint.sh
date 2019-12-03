#!/bin/bash
envsubst '${PROXY_PASS_URL},${PROXY_PASS_APICC_URL}' < /etc/nginx/nginx.template.conf > /etc/nginx/nginx.conf
nginx -g 'daemon off;'
