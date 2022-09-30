#!/bin/sh

LOCAL="frontend/local"
PUBLIC="public"
FIREBASE="."

rm -r "./public/"

cp -r "${LOCAL}" .

mv "./local/" "./public/"

mv "${PUBLIC}/index.html" "${PUBLIC}/index_local.html"

sed 's/\/local\///g' "${PUBLIC}/index_local.html" \
    >"${PUBLIC}/index.html"

rm "${PUBLIC}/index_local.html"

firebase deploy \
    --config ${FIREBASE}/firebase.json \
    --only functions
