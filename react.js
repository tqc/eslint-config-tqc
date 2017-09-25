// default eslint settings for a React app

module.exports = {
    "extends": ["tqc/default", "plugin:react/recommended"],
    "plugins": ["react"],
    "rules": {
    },
    "globals": {
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    }
};
