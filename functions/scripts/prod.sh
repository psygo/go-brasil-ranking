#!/bin/sh

npx tsc

npx webpack \
    --config=webpack.prod.js
