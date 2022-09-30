#!/bin/sh

npx live-server \
    --verbose \
    --port=8086 \
    --open=local \
    --entry-file=./local/index.html \
    --watch=local
