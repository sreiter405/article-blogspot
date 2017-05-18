module.exports = {
    "extends": "airbnb",
    "rules": {
        "semi": 0,
        "max-len": [0, 120, 2, {ignoreComments: true}],
        "no-unescaped-entities": 0,
        "no-multiple-empty-lines": 0,
    },
    "env": {
        "browser": true,
        "node": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};