#!/bin/sh

FOLDER="go_brasil_ranking/public"

# Take out `/public/` from `index.html`.
sed 's/\/public\///g' "${FOLDER}"/index.html \
    >"${FOLDER}"/index_out.html
