import { redirect } from '@sveltejs/kit'

export function load({ params }) {
  if (params.slug.endsWith('.html')) {
    throw redirect(303, `/article/${params.slug.replace(RegExp('.html$'), '')}`)
  }
}
