export async function load({ fetch }) {
  const news: NewsItem[] = await (await fetch('/api/news?limit=5')).json()
  return { news }
}
