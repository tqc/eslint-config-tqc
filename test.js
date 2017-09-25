"use strict";

module.exports = {
    "extends": "tqc/default",
    "parser": "babel-eslint",
    "rules":{
    },
    "globals": {
        "should": true,
        "assert": true,
        "expect": true,
        "chai": true
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "mocha": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "modules": true
        }
    }
};
