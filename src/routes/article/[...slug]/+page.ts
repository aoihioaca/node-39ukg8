export async function load({ params, fetch }) {
  const article: ArticleData = await (
    await fetch('/api/article/' + params.slug)
  ).json()
  return { article }
}
