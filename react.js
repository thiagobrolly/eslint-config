module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        printWidth: 80,
        tabWidth: 2,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.ts', '.tsx', '.js', '.jsx', '.mdx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: [
          'arrow-function',
          'function-declaration',
          'function-expression',
        ],
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-unused-expressions': 'off',
    'no-nested-ternary': 'off',
    'react/require-default-props': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
  overrides: [
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended', 'plugin:mdx/overrides'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            semi: true,
            singleQuote: true,
            trailingComma: 'all',
            arrowParens: 'always',
            printWidth: 80,
            tabWidth: 2,
          },
        ],
      },
    },
  ],
};
