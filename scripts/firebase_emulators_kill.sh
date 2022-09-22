#!/bin/sh

lsof -t \
    -i:9094 \
    -i:4096 \
    -i:8075 \
    -i:4095 \
    -i:9194 \
    -i:7000 |
    xargs kill -9
