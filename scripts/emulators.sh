#!/bin/sh

FIREBASE="."

sh scripts/kill_emulators.sh

firebase emulators:start \
    --config ${FIREBASE}/firebase.json \
    --only functions,firestore,auth,ui
