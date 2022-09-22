#!/bin/sh

firebase emulators:start \
    --only functions,firestore,auth,ui
