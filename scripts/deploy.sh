#!/bin/sh

################################################################################
# 1. Changing to Prod
################################################################################

ENV_PATH="frontend/src/infra"

mv "${ENV_PATH}/env.ts" "${ENV_PATH}/env_dev.ts"

sed 's/EnvState\.dev/EnvState\.prod/g' "${ENV_PATH}/env_dev.ts" \
    >"${ENV_PATH}/env.ts"
    
rm "${ENV_PATH}/env_dev.ts"

################################################################################
# 2. Compiling Frontend
################################################################################

# cd frontend || exit

################################################################################
# 2. Hosting
################################################################################

LOCAL="frontend/local"
PUBLIC="public"

rm -r "./public/"

cp -r "${LOCAL}" .

mv "./local/" "./public/"

mv "${PUBLIC}/index.html" "${PUBLIC}/index_local.html"

sed 's/\/local//g' "${PUBLIC}/index_local.html" \
    >"${PUBLIC}/index.html"

rm "${PUBLIC}/index_local.html"

################################################################################
# 3. Deploying
################################################################################

# FIREBASE="."

# firebase deploy \
#     --config ${FIREBASE}/firebase.json \
#     --only hosting
