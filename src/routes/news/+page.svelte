<script lang="ts">
  import Title from '$lib/Title.svelte'
  import { date } from '$lib/date'
  import type { PageData } from '../$types'

  export let data: PageData

  const news: { month: number; items: NewsItem[] }[] = []
  for (const newsItem of data.news) {
    const _date = date(newsItem.date)
    if (news.at(-1)?.month === _date.month) {
      news.at(-1)!.items.push(newsItem)
    } else {
      news.push({ month: _date.month, items: [newsItem] })
    }
  }
</script>

<Title>お知らせ</Title>
<div flex="~ col">
  {#each news as monthItem}
    <h3 fwbold text-2xl>{monthItem.month}月</h3>
    <div divide-y-1 divide-slate400>
      {#each monthItem.items as item}
        <!-- href="/article/{item.id}" -->
        <a
          href="https://www.pen-kanagawa.ed.jp/kawasakikoka-th/{item.id}.html"
          flex
          py2
          gap3
          items-center
        >
          <p text-slate-600 w10 text-right>{date(item.date).date}日</p>
          <p text-lg>{item.title}</p>
        </a>
      {/each}
    </div>
  {/each}
</div>

<a
  class="link"
  href="https://www.pen-kanagawa.ed.jp/kawasakikoka-th/shinchaku/"
>
  View original
</a>
