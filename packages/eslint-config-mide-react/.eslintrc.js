module.exports = {
    extends: [
        'eslint-config-airbnb',
        'eslint-config-airbnb/hooks',
        'eslint-config-mide-base',
    ].map(require.resolve),
    rules: {
        'jsx-a11y/aria-role': ['error', { ignoreNonDom: true }],
        'jsx-a11y/no-autofocus': 'off',

        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'react/forbid-prop-types': ['error', {
            forbid: ['array'],
            checkContextTypes: true,
            checkChildContextTypes: true,
        }],
    },
};
