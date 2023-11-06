module.exports = {
    root: true,

    env: {
        es2024: true,
        browser: true,
        node: false,
    },

    plugins: ['@typescript-eslint', '@babel', 'boundaries'],

    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/strict',
        'plugin:jsx-a11y/recommended',
        'plugin:sonarjs/recommended',
        'plugin:boundaries/strict',
    ],

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true,
        },
        project: 'tsconfig.json',
    },

    settings: {
        react: {
            version: 'detect',
        },
        'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
            node: true,
        },
        'boundaries/ignore': [
            '**/*.test.ts',
            '**/*.test.tsx',
            '**/__tests__/**/*',
            '**/tests/**/*',
        ],
        'boundaries/elements': [
            {
                type: 'root',
                pattern: 'src/index.ts',
                mode: 'full',
            },

            {
                type: 'core',
                pattern: 'src/core/*',
            },

            {
                type: 'contracts',
                // src/core/domain/
                pattern: 'src/*/contracts/*',
                capture: ['category'],
            },

            {
                type: 'domain',
                // src/core/domain/
                pattern: 'src/*/domain/*',
                capture: ['category'],
            },
            {
                type: 'entities',
                // src/core/domain/entities
                pattern: 'src/*/domain/entities/*',
                capture: ['category', 'subcategory'],
            },
            {
                type: 'store',
                // src/core/domain/store
                pattern: 'src/*/domain/store/*',
                capture: ['category', 'subcategory'],
            },

            {
                type: 'use_cases',
                // src/core/use_cases
                pattern: 'src/*/use_cases/*',
                capture: ['category'],
            },

            {
                type: 'services',
                pattern: 'src/services/*',
            },
            {
                type: 'ui',
                pattern: 'src/ui/*',
            },
            {
                type: 'shared',
                pattern: 'src/shared/*',
            },
            {
                type: 'utils',
                pattern: 'src/utils/*',
            },
        ],
    },

    rules: {
        indent: 'off',
        camelcase: 'off',
        'no-console': 'off',
        'max-len': 'off',
        'import/no-mutable-exports': 'off',
        'import/prefer-default-export': 'off',

        'boundaries/element-types': [
            2,
            {
                default: 'disallow',
                rules: [
                    {
                        from: 'root',
                        allow: ['utils'],
                    },
                    {
                        from: 'domain',
                        allow: ['shared'],
                    },
                    {
                        from: 'contracts',
                        allow: [['domain', { category: 'core' }]],
                        importKind: 'type',
                    },
                    {
                        from: [['entities', { category: 'core' }]],
                        allow: ['shared'],
                    },
                    {
                        from: 'store',
                        allow: [
                            ['contracts', { category: 'core' }],
                            ['entities', { category: 'core' }],
                            'shared',
                        ],
                    },
                    {
                        from: 'ui',
                        allow: [
                            ['contracts', { category: 'core' }],
                            ['entities', { category: 'core' }],
                            ['use_cases', { category: 'core' }],
                            'shared',
                        ],
                    },
                    {
                        from: 'services',
                        allow: [['contracts', { category: 'core' }], 'shared'],
                    },
                    {
                        from: 'use_cases',
                        allow: [
                            ['contracts', { category: 'core' }],
                            ['domain', { category: 'core' }],
                            'services',
                            'shared',
                        ],
                    },
                    {
                        from: 'utils',
                        allow: '*',
                    },
                ],
            },
        ],
    },

    ignorePatterns: ['*.js', '!./src'],
};
