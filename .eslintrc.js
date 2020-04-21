module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: "babel-eslint",
    extends: ["eslint:recommended"],
    parserOptions: {
        ecmaVersion: 2016,
        sourceType: "module"
    },
    rules: {
        indent: ["error", 4],
        quotes: ["error", "single"],
        semi: ["error", "always"],
        "no-console": "off"
    }
};
