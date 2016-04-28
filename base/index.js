// copied from eslint-config-defaults 9.0.0 due to 
// eslint's braindead module resolution system

"use strict";

module.exports = {
  "extends": [
    "./best-practices",
    "./errors",
    "./es6",
    "./node",
    "./strict",
    "./style",
    "./variables"
  ],
  "parser": "espree",
  "env": {
    "browser": false,
    "node": false,
    "amd": false,
    "mocha": false,
    "jasmine": false
  },
  "ecmaFeatures": {},
  "globals": {},
  "rules": {}
};
