#!/bin/sh

npm run tsc &
npm run sass &
npm run webpack &
npm run test &
npm run liveserver
