// General settings for root folder. May apply to server, test, and gulpfile code

"use strict";

module.exports = {
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "rules": {

        "no-array-constructor": "warn",

        "no-bitwise": "error",

        "no-caller": "error",
        "no-catch-shadow": "warn",
        "no-confusing-arrow": "off",

        "no-duplicate-imports": "error",

        // noop is useful
        "no-empty-function": "off",

        "no-eval": "error",

        "no-extend-native": "warn",

        "no-extra-bind": "warn",
        "no-extra-label": "error",
        "no-floating-decimal": "warn",

        "no-implicit-globals": "warn",

        "no-implied-eval": "error",

        // doesn't work too well with function params
        "no-invalid-this": "off",

        "no-iterator": "error",
        "no-lone-blocks": "error",

        "no-loop-func": "warn",
        "no-mixed-requires": "warn",
        "no-multi-spaces": "warn",

        "no-native-reassign": "error",
        "no-nested-ternary": "warn",
        "no-new": "error",


        "no-proto": "error",

        "no-return-assign": "warn",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",

        "dot-location": ["error", "property"],
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-unmodified-loop-condition": "error",

        "no-unsafe-finally": "error",
        "no-spaced-func": "error",


        "no-whitespace-before-property": "error",


        "no-use-before-define": "error",
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "off",
        "no-useless-escape": "error",

        // this rule seems broken
        "no-useless-rename": "off",

        "no-void": "error",

        "no-warning-comments": "warn",
        "no-with": "error",


        "array-bracket-spacing": "warn",
        "array-callback-return": "error",


        "accessor-pairs": "error",
        "block-scoped-var": "warn",

        // false positives
        "callback-return": "off",

        "comma-spacing": "warn",
        "comma-style": "warn",
        "computed-property-spacing": "warn",

        // this rule doesn't like return callback()
        "consistent-return": "off",


        "default-case": "error",

        "generator-star-spacing": "error",
        "handle-callback-err": ["error", "err"],

        "key-spacing": "warn",
        "keyword-spacing": "warn",

        "max-depth": "warn",
        "max-nested-callbacks": "warn",

        "max-params": ["warn", 10],

        "new-parens": "error",


        // "no-mixed-operators": "off", ???
        "block-spacing": "error",

        "eol-last": "off",

        // useful for debugging?
        "func-names": "off",
        // ?
        "func-style": "off",

        // "object-curly-newline": "off", ??
        // "object-curly-spacing": ["off", "never"], ??


        "operator-assignment": "warn",
        // "rest-spread-spacing": "off", ???
        "semi-spacing": "error",
        "space-before-blocks": "warn",

        "space-unary-ops": "warn",

        "template-curly-spacing": "error",
        "yield-star-spacing": "error",




        "no-new-func": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-label-var": "error",


        "no-path-concat": "warn",

        "no-process-env": "warn",

        "no-process-exit": "warn",
        "no-sequences": "warn",
        "no-shadow": ["warn", {allow: ["err", "error", "isComplete", "data", "response"]}],
        "no-shadow-restricted-names": "error",


        //"one-var": ["warn", "never"],
        "one-var-declaration-per-line": "warn",


        "require-yield": "off",
        "radix": "off",
        "require-jsdoc": "off",
        "no-eq-null": "off",


        "no-new-object": "error",
        // "complexity": ["off", 11],

        // too many errors
        "no-magic-numbers": "off",
        "max-len": "off",
        "no-negated-condition": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "off",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        "spaced-comment": "off",
        "no-param-reassign": "off",
        "max-statements-per-line": "off",
        "valid-jsdoc": "off",
        "no-useless-concat": "off",
        "object-shorthand": "off",
        "no-lonely-if": "off",
        "newline-per-chained-call": "warn",

        "operator-linebreak": ["off", "before"],
        "camelcase": "off",


        // optional style stuff
        "space-before-function-paren": ["warn", "never"],
        "padded-blocks": ["off", "never"],
        "object-property-newline": "off",
        "brace-style": "off",
        "space-in-parens": "warn",
        "space-infix-ops": "warn",

        // triggers on done && done()
        "no-unused-expressions": "off",



        "no-unneeded-ternary": "warn",

        "no-underscore-dangle": ["warn", {"allow": ["_id"]}],


        "no-console": 0,
        "no-unused-vars": [2, {"vars": "all", "args": "none"}],
        "indent": [
            2,
            4
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "always"
        ],

        // disallow alerts
        "no-alert": "error",

        // new-cap does not recognize decorators as new
        "new-cap": "off",

        "no-constant-condition": "warn",
        "arrow-spacing": "warn",

        // "global-require": "warn",

        "strict": "warn",

        "yoda": "error",

        "unicode-bom": "error",

        "no-trailing-spaces": "error"



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