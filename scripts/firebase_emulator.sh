#!/bin/sh

sh firebase_emulators_kill.sh

firebase emulators:start \
    --config firebase/firebase.json \
    --only functions,firestore,auth,ui
