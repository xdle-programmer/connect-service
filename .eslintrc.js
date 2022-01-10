module.exports = {
    extends: 'airbnb',
    rules: {
        // enable additional rules
        // Indent with 4 spaces
        indent: ['error', 4],

        // Indent JSX with 4 spaces
        'react/jsx-indent': ['error', 4],

        // Indent props with 4 spaces
        'react/jsx-indent-props': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],

        // override configuration set by extending "eslint:recommended"
        'no-empty': 'warn',
        'no-cond-assign': ['error', 'always'],

        // disable rules from base configurations
        'for-direction': 'off',
        'react/prop-types': 'off',
    },
    parser: '@babel/eslint-parser',
};
