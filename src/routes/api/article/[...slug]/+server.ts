import { getArticle } from '$lib/server/article'
import { json } from '@sveltejs/kit'

export async function GET({ params }) {
  return json(await getArticle(params.slug))
}
