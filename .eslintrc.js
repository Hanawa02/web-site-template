module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'eslint:recommended',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/html-self-closing': ['error', { html: { void: 'any' } }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    semi: ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore'
      }
    ],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        // cant add eslint ignore to css in vue files
        ignorePattern: 'url\\(.*\\)'
      }
    ],
    'no-empty': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    curly: ['error', 'all']
  }
}
