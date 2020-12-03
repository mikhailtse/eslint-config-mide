module.exports = {
    extends: [
        'eslint-config-airbnb-typescript/base',
        'eslint-config-mide-base',
    ].map(require.resolve),
    rules: {
        'import/extensions': ['error', 'ignorePackages', {
            js: 'never',
            jsx: 'never',
            mjs: 'never',
            ts: 'never',
            tsx: 'never',
        }],

        '@typescript-eslint/indent': ['error', 4],
    },
};
