#!/bin/bash
docker build -t datahub-ui:latest .
docker run --rm -d -p 8080:80 -e PROXY_PASS_WEBAPI="proxy_pass http://localhost:3006;" -e PROXY_PASS_APICC="proxy_pass http://localhost:3003;" datahub-ui:latest
