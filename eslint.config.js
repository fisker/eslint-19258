import prettier from 'eslint-plugin-prettier'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    rules: {
      'no-trailing-spaces': 'off',
    }
  },
  {
    plugins: {
      prettier,
    },
    languageOptions: {
      parser: tsParser,
    },
    files: ['sdk.gen.ts'],
    rules: {
      'prettier/prettier': 'error',
      'no-trailing-spaces': 'error',
    }
  }
]
