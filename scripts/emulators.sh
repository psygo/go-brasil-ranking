#!/bin/sh

sh scripts/kill_emulators.sh

firebase emulators:start \
    --config ./firebase.json \
    --only functions,firestore,auth,ui
