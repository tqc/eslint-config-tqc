// default eslint settings for a chondric app

module.exports = {
    "extends": "tqc/default",
    "parser": "babel-eslint",
    "rules": {
    },
    "globals": {
        "Directive": true,
        "Route": true,
        "angular": true,
        "$": true
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