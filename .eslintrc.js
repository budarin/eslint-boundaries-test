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
                mode: 'file',
            },

            {
                type: 'contracts',
                pattern: 'src/core/contracts/*',
                mode: 'file',
            },

            {
                type: 'domain',
                pattern: 'src/core/domain/*',
                mode: 'file',
            },

            {
                type: 'entities',
                pattern: 'src/core/domain/entities/*',
                mode: 'file',
            },
            {
                type: 'entities',
                pattern: 'src/core/domain/entities/*',
            },

            {
                type: 'store',
                pattern: 'src/core/domain/store/*',
                mode: 'file',
            },
            {
                type: 'store',
                pattern: 'src/core/domain/store/*',
                mode: 'folder',
            },

            {
                type: 'use_cases',
                pattern: 'src/core/use_cases/*',
                mode: 'file',
            },
            {
                type: 'use_cases',
                pattern: 'src/core/use_cases/*',
                mode: 'folder',
            },

            {
                type: 'services',
                pattern: 'src/services/*',
                mode: 'file',
            },
            {
                type: 'services',
                pattern: 'src/services/*',
                mode: 'folder',
            },

            {
                type: 'ui',
                pattern: 'src/ui/*',
                mode: 'file',
            },
            {
                type: 'ui',
                pattern: 'src/ui/*',
                mode: 'folder',
            },

            {
                type: 'shared',
                pattern: 'src/shared/*',
                mode: 'file',
            },
            {
                type: 'shared',
                pattern: 'src/shared/*',
                mode: 'folder',
            },

            {
                type: 'utils',
                pattern: 'src/utils/*',
                mode: 'file',
            },
            {
                type: 'utils',
                pattern: 'src/utils/*',
                mode: 'folder',
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
                message:
                    'Модули из "${file.type}" не могут импортировать модули из "${dependency.type}" или такие типы модулей (types или code)',
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
                        allow: ['domain', 'entities', 'store', 'use_cases', 'services'],
                        importKind: 'type',
                        message:
                            'Контраты могут импортировать исключительно типы из доменов, юзкейсов и сервисов',
                    },
                    {
                        from: 'entities',
                        allow: ['shared'],
                    },
                    {
                        from: 'store',
                        allow: ['contracts', 'entities', 'shared'],
                    },
                    {
                        from: 'ui',
                        allow: ['contracts', 'entities', 'use_cases', 'shared'],
                    },
                    {
                        from: 'services',
                        allow: ['contracts', 'shared'],
                    },
                    {
                        from: 'use_cases',
                        allow: ['contracts', 'entities', 'store', 'services', 'shared'],
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
