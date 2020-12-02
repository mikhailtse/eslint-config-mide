module.exports = {
    extends: [
        'eslint-config-airbnb-typescript/base',
        'eslint-config-mide-base',
    ].map(require.resolve),
    rules: {
        '@typescript-eslint/indent': ['error', 4],
    },
};
