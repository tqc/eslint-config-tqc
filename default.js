// General settings for root folder. May apply to server, test, and gulpfile code

"use strict";

module.exports = {
    "extends": "defaults/configurations/eslint",
    "parser": "babel-eslint",
    "rules":{
        "eqeqeq": 0,
        "no-console": 0,
        "no-unused-vars": [2, {"vars": "all", "args":"none"}],
        "indent": [
            2,
            4
        ],
        "quotes": 0,
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "always"
        ],
        // strict mode isn't really needed in es6 code
        "strict": 0, //[2, "never"],
        //"dot-notation": [2, {"allowKeywords": false}],

        // allow one line ifs
        "curly": 0,
        // newline at file end is optional
        "eol-last": 0,
        // allow alerts
        "no-alert": 2,
        // new-cap does not recognize decorators as new
        "new-cap": 0,
        "no-labels": 0,
        "no-this-before-super": 2,
        "no-trailing-spaces": 2
    },
    "globals": {
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