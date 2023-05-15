import type { Handle } from '@sveltejs/kit'
import { minify, type Options } from 'html-minifier-terser'

const minifyOptions: Options = {
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  decodeEntities: true,
  noNewlinesBeforeTagClose: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeEmptyElements: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeTagWhitespace: true,
  sortAttributes: true,
  sortClassName: true,
  useShortDoctype: true,
  minifyURLs: true,
  minifyJS: true
}

export const handle: Handle = async ({ resolve, event }) => {
  const response = await resolve(event)

  if (response.headers.get('Content-Type') === 'text/html') {
    return new Response(await minify(await response.text(), minifyOptions), {
      status: response.status,
      headers: { 'content-type': 'text/html' }
    })
  }

  return response
}
