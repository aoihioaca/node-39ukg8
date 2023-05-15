import { getNews, newsLastModified } from '$lib/server/news'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
  let news = await getNews()

  const limit = parseInt(url.searchParams.get('limit') ?? '')
  if (limit) {
    news = news.slice(0, limit)
  }

  return json(news, {
    headers: {
      'Last-Modified': newsLastModified
    }
  })
}
