#!/bin/sh

# PUBLIC="frontend/public"
FIREBASE="."

# # Take out `/public/` from `index.html`.
# sed 's/\/public\///g' "${PUBLIC}"/index.html \
#     >"${PUBLIC}"/index_out.html

firebase deploy \
    --config ${FIREBASE}/firebase.json \
    --only hosting
