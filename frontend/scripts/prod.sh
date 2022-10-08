#!/bin/bash

npx sass \
    --style=compressed \
    ./src/ui/styles/index.scss \
    ../public/index.css

npx tsc

npx webpack \
    --config=webpack.prod.js

exit 0
