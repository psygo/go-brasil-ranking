#!/bin/sh

FIREBASE="."

sh scripts/emulators_kill.sh

firebase emulators:start \
    --config ${FIREBASE}/firebase.json \
    --only functions,firestore,auth,ui
