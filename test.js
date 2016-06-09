"use strict";

module.exports = {
    "extends": "./default",
    "parser": "babel-eslint",
    "rules":{
    },
    "globals": {
        "should": true,
        "assert": true,
        "expect": true
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "mocha": true
    },
    "ecmafeatures": {
        "modules": true
    }
};