#!/usr/bin/env bash

mongod --dbpath=/usr/local/var/mongodb 1>.mongo.log 2>&1 & 
