module.exports = {
    root: true,
    env: {
        jest: true,
    },
    extends: [
        "standard-with-typescript",
        "plugin:jest/recommended",
        "prettier",
        "prettier/@typescript-eslint",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.eslint.json", "./packages/*/tsconfig.json"],
    },
    plugins: ["@typescript-eslint", "jest"],
};
