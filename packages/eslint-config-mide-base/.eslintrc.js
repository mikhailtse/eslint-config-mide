module.exports = {
    extends: [
        'airbnb-base',
    ],
    rules: {
        'arrow-body-style': 'off',
        'indent': ['error', 4, {
            ignoredNodes: [
                'JSXElement',
                'JSXElement > *',
                'JSXAttribute',
                'JSXIdentifier',
                'JSXNamespacedName',
                'JSXMemberExpression',
                'JSXSpreadAttribute',
                'JSXExpressionContainer',
                'JSXOpeningElement',
                'JSXClosingElement',
                'JSXFragment',
                'JSXOpeningFragment',
                'JSXClosingFragment',
                'JSXText',
                'JSXEmptyExpression',
                'JSXSpreadChild',
            ]
        }],
        'linebreak-style': 'off',
        'max-len': 'off',
        'no-console': ['error', { 'allow': ['warn', 'error'] }],
    },
}