import { axios } from '../../hooks.server'
import { getArticle } from './article'
import { parseHTML } from 'linkedom'

let news: NewsItem[] = []
export let newsLastModified: string

export async function getNews() {
  if (news.length) return news
  const res = await axios.get(
    'https://www.pen-kanagawa.ed.jp/kawasakikoka-th/shinchaku/',
    { cache: { ttl: Math.pow(9, 9) } }
  )
  const parsedNews = await parseNews(res.data)
  newsLastModified = res.headers['last-modified']
  return (news = parsedNews)
}

async function parseNews(html: string): Promise<NewsItem[]> {
  const { document } = parseHTML(html)
  const list = document.querySelectorAll('#tmp_contents > ul > li > a')

  return Promise.all(
    Array.from(list).map((elem, index) =>
      (async () => {
        const textMatch = elem.textContent!.match(/^(.+)（(\d+)月(\d+)日）$/)!
        const href = elem.getAttribute('href')!
        const date = new Date(
          1970,
          parseInt(textMatch[2]) - 1,
          parseInt(textMatch[3])
        )

        const id = href.replace(RegExp('/kawasakikoka-th/(.+).html'), '$1')
        let summary: string | undefined
        if (index < 5) {
          summary = (await getArticle(id)).summary
        }

        return {
          title: textMatch[1],
          date: date.toJSON(),
          id,
          summary
        }
      })()
    )
  )
}
