#!/bin/bash

toggleEnv() {
    local ENV_PATH="frontend/src/infra"

    local FROM
    local TO
    if [ "$1" == "prod" ]; then
        FROM="dev"
        TO="prod"
    elif [ "$1" == "dev" ]; then
        FROM="prod"
        TO="dev"
    fi

    mv "${ENV_PATH}/env.ts" "${ENV_PATH}/env_dev.ts"

    sed "s/EnvState\.${FROM}/EnvState\.${TO}/g" \
        "${ENV_PATH}/env_dev.ts" \
        >"${ENV_PATH}/env.ts"

    rm "${ENV_PATH}/env_dev.ts"
}

################################################################################
# 1. Changing the Global Variable to Production
################################################################################

toggleEnv prod

################################################################################
# 2. Copying the Local Development into the Public Folder
################################################################################

rm -r "./public/"

cp -r "frontend/local/" .

mv "./local/" "./public/"

mv "./public/index.html" "./public/index_local.html"

sed 's/\/local//g' "./public/index_local.html" \
    >"./public/index.html"

rm "./public/index_local.html"

################################################################################
# 3. Compiling Frontend in Production
################################################################################

cd frontend || exit 1

sh scripts/prod.sh

cd ..

################################################################################
# 4. Compiling Functions in Production
################################################################################

cd functions || exit 2

sh scripts/prod.sh

cd ..

################################################################################
# 5. Deploying
################################################################################

firebase deploy \
    --config ./firebase.json \
    --only hosting

################################################################################
# 6. Changing the Global Variable Back to Development
################################################################################

toggleEnv dev

################################################################################

exit 0
