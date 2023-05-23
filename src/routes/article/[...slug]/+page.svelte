<script lang="ts">
  import xss from 'xss'

  import { page } from '$app/stores'
  import type { PageData } from './$types'
  import ExtLink from '$lib/ExtLink.svelte'

  export let data: PageData

  const articleHTML = xss(`${data.article.html}`)
</script>

<h1 text-2xl fwbold p2>{data.article.title}</h1>
<article bg-blue-100 p5 rounded-xl shadow-md>
  {@html articleHTML}
</article>
<div h3 />
<ExtLink
  textLink
  href="https://www.pen-kanagawa.ed.jp/kawasakikoka-th/{$page.params.slug}.html"
>
  View original
</ExtLink>

<!-- [plugin:vite:css] [postcss] /home/user/Documents/latest/src/routes/article/[...slug]/+page.svelte?svelte&type=style&lang.css:1:16: Unnecessary curly bracket -->
<!-- <style lang="sugarss">
h1
  font-size: 5em
</style> -->
