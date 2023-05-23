<script lang="ts">
  import { navigating } from '$app/stores'
  import ExtLink from '$lib/ExtLink.svelte'

  const links = [
    {
      href: '/',
      text: 'ホーム'
    },
    {
      href: '/summary',
      text: '学校概要'
    },
    {
      href: '/courses',
      text: 'コース'
    }
  ]

  let checked: boolean
  $: if ($navigating) checked = false
</script>

<nav fixed wfull max-w-screen-lg z10 top="0 md:2" inset-x-0 ma>
  <div backdrop-blur-md rd="lt-md:b-xl md:xl" bg="blue100/80">
    <div flex="~ wrap" items-center px10 fwbold lt-md:justify-between md:gap4>
      <a h16 flex items-center gap2 href="/">
        <img h10 src="$lib/assets/logo.png" alt="ロゴ" />
        <h1 text-xl>川崎工科高等学校</h1>
      </a>
      <input id="hamburgbtn" type="checkbox" bind:checked hidden />
      <label
        for="hamburgbtn"
        p3
        cursor-pointer
        rd-lg
        md:hidden
        bg="hover:blue-300/50"
      >
        {#each Array(3) as _}
          <div />
        {/each}
      </label>
      <div id="menu" lt-md="hidden wfull pb5 pt1">
        <flex
          text-center
          lt-md="flex-col wfull dividey divide-blue300 b b-blue300 rd-lg"
        >
          {#each links as { text, href }}
            <a {href} p3 bg="hover:blue300/50" md:rd-lg>{text}</a>
          {/each}
        </flex>
      </div>
    </div>
  </div>
</nav>
