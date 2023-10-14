module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    // code conventions
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'class', 'try', 'for', 'if', 'switch', 'while'],
      },
    ],
    'no-var': 2,
    'prefer-const': 2,
    'prefer-template': 2,
    'prefer-spread': 2,
    'spaced-comment': 1,
    'max-statements-per-line': 2,
    'multiline-comment-style': 2,
    'no-octal-escape': 0,
    'react/react-in-jsx-scope': 0,
    // react rules
    'react/prop-types': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-typos': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': 2,
    'react/sort-prop-types': 2,
    // To identify sx
    'react/no-unknown-property': ['error', { ignore: ['sx'] }],
    // import rules
    'import/newline-after-import': [
      2,
      {
        count: 1,
      },
    ],
    'import/no-duplicates': 2,
    'import/no-unresolved': 0,
    'import/named': 0,
    'import/no-named-as-default': 0,
    'no-console': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/no-unescaped-entities': 'off',

    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' },
    ],

    // #region  //*=========== Unused Import ===========
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    // #endregion  //*======== Unused Import ===========

    // #region  //*=========== Import Sort ===========
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // ext library & side effect imports
          ['^@?\\w', '^\\u0000'],
          // {s}css files
          ['^.+\\.s?css$'],
          // Lib and hooks
          ['^@/lib', '^@/hooks'],
          // static data
          ['^@/data'],
          // components
          ['^@/components', '^@/container'],
          // zustand store
          ['^@/store'],
          // Other imports
          ['^@/'],
          // relative paths up until 3 level
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          ['^@/types'],
          // other that didnt fit in
          ['^'],
        ],
      },
    ],
    // #endregion  //*======== Import Sort ===========
  },
  globals: {
    React: true,
    JSX: true,
  },
};
