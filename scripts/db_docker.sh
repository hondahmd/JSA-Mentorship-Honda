#!/bin/bash
docker build -t honda:1.0 .
docker run -p 3307:3306 --name honda -e MYSQL_ROOT_PASSWORD=password -d honda:1.0