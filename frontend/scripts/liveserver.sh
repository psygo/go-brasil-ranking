#!/bin/sh

npx live-server \
    --verbose \
    --port=8086 \
    --open=public \
    --entry-file=public/index.html \
    --watch=public
