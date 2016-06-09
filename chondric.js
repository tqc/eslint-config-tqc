"use strict";

// default eslint settings for a chondric app

module.exports = {
    "extends": "./default",
    "parser": "babel-eslint",
    "rules":{
    },
    "globals": {
        "Directive": true,
        "Route": true
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "ecmafeatures": {
        "modules": true
    }
};