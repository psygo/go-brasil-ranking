#!/bin/sh

# Firebase Emulators

# We need to be in the functions directory for this.
# Run it with `npm run everything`

# if [[ ":$PWD:" != *":functions:"]]; then
#     echo "Need to be in the functions/ directory."
#     exit
# fi

cd ..

firebase emulators:start &

# Go Brasil Ranking

cd go_brasil_ranking || exit

npm run tsc &
npm run webpack &
npm run test &

# Functions

cd ../functions || exit

npm run tsc &
npm run webpack
