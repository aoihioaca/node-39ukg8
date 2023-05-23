import { json } from '@sveltejs/kit'

import { getArticle } from '$lib/server/article'

export async function GET({ params }) {
  return json(await getArticle(params.slug))
}
