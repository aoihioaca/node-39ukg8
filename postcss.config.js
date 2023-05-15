export default {
  parser: 'sugarss',
  plugins: {
    '@unocss/postcss': {
      content: ['./src/**/*.svelte']
    },
    'postcss-preset-env': { stage: 0 },
    cssnano: { preset: 'advanced' }
  }
}
