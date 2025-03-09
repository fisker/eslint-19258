import prettier from 'eslint-plugin-prettier'

export default [
  {
    plugins: {
      prettier,
    },
    rules: {
      'no-trailing-spaces': 'error',
      'prettier/prettier': 'error',
    }
  }
]
