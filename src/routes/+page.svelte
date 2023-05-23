<script lang="ts">
  import Container from '$lib/Container.svelte'
  import ExtImg from '$lib/ExtImg.svelte'
  import { date } from '$lib/date'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<div relative hscreen>
  <ExtImg
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Kawasaki_Koka.jpg/1920px-Kawasaki_Koka.jpg"
    width="300px"
    alt="Front of building"
    hscreen
    wscreen
    object-cover
    absolute
    brightness-125
    select-none
  />
  <absolute wfull top="1/2" md:left="1/4" flex="~ col" lt-md:items-center>
    <div>
      <h1
        text-7xl
        fwmedium
        text-slate300
        drop-shadow="[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
      >
        試される大地
      </h1>
      <h3
        text-4xl
        fwmedium
        text-slate100
        drop-shadow="[0_3px_3px_rgba(0,0,0,0.8)]"
        mt1
      >
        鋼に魂を込めて
      </h3>
    </div>
  </absolute>
</div>
<Container>
  <div py5 flex="~ col" gap10>
    <div flex="~ col" items-center gap3 text-center>
      <h1 text-4xl fwbold>学校概要</h1>
      <bg-red300 w32 h1 />
      <p text-md text-slate500 md:px20>
        当校では、科学技術の発展に寄与し、広く世界で活躍しようという向上心を持ち、豊かな教養と創造力のある人間の育成を目指す。
      </p>
      <a href="/summary">
        <button
          border="~ red400"
          text="red600 hover:white"
          px6
          py2
          rd-full
          flex
          items-center
          gap1
          hover:bg-red400>もっと読む<i-mdi:arrow-right text-red400 /></button
        >
      </a>
    </div>
    <div flex="~ col" items-center gap3 text-center>
      <h1 text-4xl fwbold>コース</h1>
      <bg-green300 w32 h1 />
      <p text-md text-slate500 md:px20>
        川崎工科は6つのコースを持っています。コースに見合ったカリキュラムや進路を見つけることができます。
      </p>
      <grid gap8 md:grid-cols-3 my3>
        <bg-red100 shadow="md hover:xl" hover:scale-105 rd-xl p4>
          <h3 text-lg fwbold>化学系</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            lorem placerat, imperdiet erat hendrerit, egestas dui. Nulla at
            vehicula erat, pellentesque aliquam ipsum. Integer scelerisque
            congue semper.
          </p>
        </bg-red100>
        <bg-green100 shadow="md hover:xl" hover:scale-105 rd-xl p4>
          <h3 text-lg fwbold>電気系</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            lorem placerat, imperdiet erat hendrerit, egestas dui. Nulla at
            vehicula erat, pellentesque aliquam ipsum. Integer scelerisque
            congue semper.
          </p>
        </bg-green100>
        <bg-sky100 shadow="md hover:xl" hover:scale-105 rd-xl p4>
          <h3 text-lg fwbold>機械系</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            lorem placerat, imperdiet erat hendrerit, egestas dui. Nulla at
            vehicula erat, pellentesque aliquam ipsum. Integer scelerisque
            congue semper.
          </p>
        </bg-sky100>
      </grid>
      <a href="/courses">
        <button
          border="~ green400"
          text="green600 hover:white"
          px6
          py2
          rd-full
          flex
          items-center
          gap1
          hover:bg-green400>全コースを見る<i-mdi:arrow-right text-green400 /></button>
      </a>
    </div>
    <div flex="~ col" items-center gap3>
      <h1 text-4xl fwbold>お知らせ</h1>
      <bg-amber-300 w32 h1 />
      <div flex="~ col" divide-y-1 divide-slate400>
        {#each data.news as item}
          <a
            href="https://www.pen-kanagawa.ed.jp/kawasakikoka-th/{item.id}.html"
            flex
            p2
            gap3
            items-center
            hover:bg-slate-200
          >
            <div text-slate-600 flex w10 h9 justify-between class="date">
              <sup w="50%" text-center fwbold text-xl>
                {date(item.date).month}
              </sup>
              <sub w="50%" text-center fwbold text-xl self-end>
                {date(item.date).date}
              </sub>
            </div>
            <div>
              <p text-lg fwbold>{item.title}</p>
              <p line-clamp-1>{item.summary}<span select-none>…</span></p>
            </div>
          </a>
        {/each}
      </div>
      <a href="/news">
        <button
          border="~ amber400"
          text="amber600 hover:white"
          px6
          py2
          rd-full
          flex
          items-center
          gap1
          hover:bg-amber400>すべて見る<i-mdi:arrow-right text-amber400 /></button
        >
      </a>
    </div>
  </div>
</Container>
