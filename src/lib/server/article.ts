import { parseHTML } from 'linkedom'

import { axios } from '../../hooks.server'

export async function getArticle(id: string) {
  const res = await axios.get(
    `https://www.pen-kanagawa.ed.jp/kawasakikoka-th/${id}.html`,
    { cache: { ttl: Math.pow(9, 9) } }
  )
  return parseArticle(res.data)
}

async function parseArticle(html: string): Promise<ArticleData> {
  const { document } = parseHTML(html)
  const main = document.querySelector('#tmp_contents')
  const title = main!.querySelector('h1')
  title!.remove()
  return {
    title: title!.textContent!,
    html: main!.innerHTML,
    summary: main!.textContent!.trim().replaceAll(/\s+/g, ' ').slice(0, 50)
  }
}
