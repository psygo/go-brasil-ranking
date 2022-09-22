#!/bin/sh

echo "${PWD}"

firebase emulators:start \
    --config firebase/firebase.json \
    --only functions,firestore,auth,ui
