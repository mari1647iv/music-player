module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended", 
        "plugin:prettier/recommended"
    ],  
    "parser": '@babel/eslint-parser',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },  
    "plugins": ["react", "prettier"],
    "rules": {
        'import/prefer-default-export': 0,
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
        'jsx-a11y/label-has-associated-control': 0
    }
    }
