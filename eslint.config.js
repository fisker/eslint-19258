import prettier from 'eslint-plugin-prettier'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    plugins: {
      prettier,
    },
    languageOptions: {
      parser: tsParser,
    },
    files: ['sdk.gen.ts'],
    rules: {
      'no-trailing-spaces': 'error',
      'prettier/prettier': 'error',
    }
  }
]
