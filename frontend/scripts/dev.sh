#!/bin/bash

PORT=8086

if [[ $(lsof -ti:"${PORT}") ]]; then
    lsof -ti:"${PORT}" | xargs kill -9
fi

npm run tsc &
npm run sass &
npm run webpack &
npm run test &
npm run liveserver
