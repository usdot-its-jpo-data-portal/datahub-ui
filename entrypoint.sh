#!/bin/bash
envsubst '${PROXY_PASS_WEBAPI},${PROXY_PASS_APICC}' < /etc/nginx/nginx.template.conf > /etc/nginx/nginx.conf
nginx -g 'daemon off;'
