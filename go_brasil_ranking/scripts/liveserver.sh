#!/bin/sh

npx live-server \
    --verbose \
    --port=8083 \
    --open=public \
    --entry-file=public/index.html \
    --watch=public
