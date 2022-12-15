/**
 * @module ESLintConfig
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'eslint-config-airbnb-base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'plugin:jest-dom/recommended',
    'plugin:jsdoc/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:testing-library/react',
    'prettier',
  ],
  globals: {
    document: true,
    window: true,
  },
  ignorePatterns: ['**/node_modules/**'],
  overrides: [
    {
      files: [
        '*_spec.+(js|ts|md)?(x)',
        '*.+(stories|test|spec).+(js|ts|md)?(x)',
      ],
      rules: {
        'jsdoc/check-access': 'off',
        'jsdoc/check-alignment': 'off',
        'jsdoc/check-examples': 'off',
        'jsdoc/check-indentation': 'off',
        'jsdoc/check-line-alignment': 'off',
        'jsdoc/check-param-names': 'off',
        'jsdoc/check-property-names': 'off',
        'jsdoc/check-syntax': 'off',
        'jsdoc/check-tag-names': 'off',
        'jsdoc/check-types': 'off',
        'jsdoc/check-values': 'off',
        'jsdoc/empty-tags': 'off',
        'jsdoc/implements-on-classes': 'off',
        'jsdoc/match-description': 'off',
        'jsdoc/newline-after-description': 'off',
        'jsdoc/no-bad-blocks': 'off',
        'jsdoc/no-defaults': 'off',
        'jsdoc/no-types': 'off',
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/require-description': 'off',
        'jsdoc/require-description-complete-sentence': 'off',
        'jsdoc/require-example': 'off',
        'jsdoc/require-file-overview': 'off',
        'jsdoc/require-hyphen-before-param-description': 'off',
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-param': 'off',
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-param-name': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-property': 'off',
        'jsdoc/require-property-description': 'off',
        'jsdoc/require-property-name': 'off',
        'jsdoc/require-property-type': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-returns-check': 'off',
        'jsdoc/require-returns-description': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/require-throws': 'off',
        'jsdoc/tag-lines': 'off',
        'jsdoc/valid-types': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-jest',
    'eslint-plugin-jest-dom',
    'eslint-plugin-jsdoc',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-plugin-testing-library',
  ].filter(Boolean),
  rules: {
    // Ensure that block statements use One True Bracket Style for curly braces.
    'brace-style': ['error', '1tbs'],
    // This can be enforced in code review, but some API params are camel_case,
    // so there is legitimate cause to disable the rule.
    camelcase: [0, { properties: 'never' }],
    // Ensure that all block statements are wrapped in curly braces.
    curly: ['error', 'all'],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'jsdoc/check-access': 'warn',
    'jsdoc/check-alignment': 'warn',
    'jsdoc/check-examples': 'off', // This rule is buggy.
    'jsdoc/check-indentation': 'warn',
    'jsdoc/check-line-alignment': 'off',
    'jsdoc/check-param-names': ['warn', { enableFixer: false }],
    'jsdoc/check-property-names': ['warn', { enableFixer: false }],
    'jsdoc/check-syntax': 'warn',
    'jsdoc/check-tag-names': 'warn',
    'jsdoc/check-types': 'warn',
    'jsdoc/check-values': 'warn',
    'jsdoc/empty-tags': 'warn',
    'jsdoc/implements-on-classes': 'warn',
    'jsdoc/match-description': 'warn',
    'jsdoc/newline-after-description': 'warn',
    'jsdoc/no-bad-blocks': 'warn',
    'jsdoc/no-defaults': 'warn',
    'jsdoc/no-types': 'off',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-description': 'warn',
    'jsdoc/require-description-complete-sentence': [
      'warn',
      { tags: ['see', 'copyright', 'deprecated'] },
    ],
    'jsdoc/require-example': [
      'off', // Disabling because it adds empty @example tags to all functions.
      {
        exemptNoArguments: true,
      },
    ],
    'jsdoc/require-file-overview': [
      'warn',
      {
        tags: {
          module: {
            initialCommentsOnly: true,
            mustExist: true,
            preventDuplicates: true,
          },
        },
      },
    ],
    'jsdoc/require-hyphen-before-param-description': ['warn', 'always'],
    'jsdoc/require-jsdoc': [
      'warn',
      {
        enableFixer: false,
        publicOnly: true,
        require: { ArrowFunctionExpression: false, FunctionExpression: false },
      },
    ],
    'jsdoc/require-param': [
      'warn',
      {
        enableFixer: false,
        unnamedRootBase: ['params'],
      },
    ],
    'jsdoc/require-param-description': 'warn',
    'jsdoc/require-param-name': 'warn',
    'jsdoc/require-param-type': 'warn',
    'jsdoc/require-property': 'warn',
    'jsdoc/require-property-description': 'warn',
    'jsdoc/require-property-name': 'warn',
    'jsdoc/require-property-type': 'warn',
    'jsdoc/require-returns': 'warn',
    'jsdoc/require-returns-check': 'warn',
    'jsdoc/require-returns-description': 'warn',
    'jsdoc/require-returns-type': 'warn',
    'jsdoc/require-throws': 'warn',
    'jsdoc/tag-lines': 'off',
    'jsdoc/valid-types': 'warn',
    'no-extra-boolean-cast': ['off'],
    'no-unused-vars': 'warn',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        jsxSingleQuote: false,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
    'react/jsx-boolean-value': ['warn', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'warn',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/sort-prop-types': [
      'warn',
      {
        ignoreCase: true,
        // Sorts the internals of PropTypes.shape({}).
        sortShapeProp: true,
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'sort-imports': [
      'warn',
      {
        // It is many times preferable to have React and PropTypes at the top of
        // files for importing, so this can be ignored for sorting.
        ignoreDeclarationSort: true,
      },
    ],
    // Alphabetize keys.
    'sort-keys': [
      'warn',
      'asc',
      { caseSensitive: false, minKeys: 2, natural: true },
    ],
    // Allow for triple-slashes, like /// <reference types="cypress" />
    'spaced-comment': [2, 'always', { markers: ['/'] }],
  },
  settings: {
    'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.test.js'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
