#!/bin/sh

# 1. Firebase Emulators

firebase emulators:start &

# 2. Go Brasil Ranking

cd frontend || exit

npm run dev &

# 3. Functions

cd ../functions || exit

npm run dev