#!/bin/sh

PUBLIC="frontend/public"

# Take out `/public/` from `index.html`.
sed 's/\/public\///g' "${PUBLIC}"/index.html \
    >"${PUBLIC}"/index_out.html

firebase deploy \
    --config firebase/firebase.json \
    --only hosting,functions,firestore,auth
