#!/bin/sh

# Firebase Emulators

# We need to be in the functions directory for this.
# Run it with `npm run everything`

# if [[ ":$PWD:" != *":functions:"]]; then
#     echo "Need to be in the functions/ directory."
#     exit
# fi

firebase emulators:start &

# Go Brasil Ranking

cd go_brasil_ranking || exit

npm run everything &

# Functions

cd ../functions || exit

npm run everything