#!/bin/sh

npm run tsc &
npm run webpack &
npm run test &
