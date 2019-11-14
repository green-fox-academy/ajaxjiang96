#!/bin/sh
echo "[React Init] Creating react project [$1] with create-react-app";
npx create-react-app $1
echo "[React Init] Installing prop-types";
cd $1
yarn add prop-types redux react-redux
echo "[React Init] Setting up ESLint";
yarn add -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
echo '{
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": "off"
    }
}' > .eslintrc.json

echo "[React Init] Finished setup";

