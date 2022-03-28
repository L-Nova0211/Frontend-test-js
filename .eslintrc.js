module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: ['vue', 'prettier'],
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    '@vue/prettier',
    'prettier',
  ],
  rules: {
    'vue/script-setup-uses-vars': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Disable the following rule, because it's not relevant for the tool chain and test envoirment.
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['tailwind.config.js', 'vite.config.js'],
      },
    ],

    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],

    // Enforce v-bind directive usage in long form.
    'vue/v-bind-style': ['error', 'longform'],

    // Enforce v-on directive usage in long form.
    'vue/v-on-style': ['error', 'longform'],

    // Don't require a default value for the props.
    'vue/require-default-prop': 'off',

    'vue/multi-word-component-names': 'off',
  },
  overrides: [],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module', // allow the use of imports statements
    ecmaVersion: 2020, // allow the parsing of modern ecmascript
  },
}
