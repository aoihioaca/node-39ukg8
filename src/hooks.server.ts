import Axios from 'axios'
import { buildStorage, setupCache } from 'axios-cache-interceptor'
import { type Options, minify } from 'html-minifier-terser'
import { existsSync } from 'node:fs'
import { readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'

function getPath(key: string) {
  return path.join('cache', key + '.json')
}

export const axios = setupCache(Axios, {
  storage: buildStorage({
    async find(key) {
      if (existsSync(getPath(key))) {
        return JSON.parse(await readFile(getPath(key), 'utf-8'))
      }
    },
    async set(key, value) {
      console.log(
        `cache written: ${key} - ${JSON.stringify(value).slice(0, 100)}`
      )
      await writeFile(getPath(key), JSON.stringify(value))
    },
    async remove(key) {
      await rm(getPath(key))
    }
  })
})

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

export const handle = async ({ event, resolve }) => {
  const response = await resolve(event)

  if (response.headers.get('Content-Type') === 'text/html')
    return new Response(await minify(await response.text(), minifyOptions), {
      status: response.status,
      headers: { 'Content-Type': 'text/html' }
    })

  return response
}
