#!/bin/bash
docker build -t datahub-ui:latest .
docker run --rm -d -p 8080:80 -e PROXY_PASS_WEBAPI=http://localhost:3006/api -e PROXY_PASS_APICC=http://localhost:3003/apicc datahub-ui:latest
