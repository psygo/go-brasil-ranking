#!/bin/bash

for port in {9094,4096,8075,4095,7000}; do
    if [[ $(lsof -ti:"${port}") ]]; then
        lsof -ti:"${port}" | xargs kill -9
    fi
done
