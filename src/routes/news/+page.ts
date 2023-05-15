export async function load({ fetch }) {
  const news: NewsItem[] = await (await fetch('/api/news')).json()
  return { news }
}
