import prettier from 'eslint-plugin-prettier'

export default [
  {
    files: ['fixture.js'],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-trailing-spaces': 'error',
    },
  },
]
