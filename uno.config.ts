import extractorSvelte from '@unocss/extractor-svelte'
import { defineConfig, presetUno } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

export default defineConfig({
  extractors: [extractorSvelte(), extractorPug()],
  presets: [presetUno()]
})
