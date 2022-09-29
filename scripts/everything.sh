#!/bin/sh

# 1. Firebase Emulators

firebase emulators:start &

# 2. Go Brasil Ranking

cd frontend || exit

npm run everything &

# 3. Functions

cd ../functions || exit

npm run everything