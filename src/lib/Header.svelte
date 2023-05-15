<script lang="ts">
  import { navigating } from '$app/stores'

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

  let checked
  $: if ($navigating) checked = false
</script>

<template lang="pug">
  nav.fixed.w-full.max-w-screen-lg.z-10.top-0.inset-x-0.mx-auto(class="md:top-2 md:px-5 md:py-3")
    .backdrop-blur-md(class="max-md:rounded-b-xl md:rounded-xl bg-blue-100/80")
      .flex.flex-wrap.items-center.px-10.font-bold(class="max-md:justify-between md:gap-4")
        a.h-16.flex.items-center.gap-2(href="/")
          img.h-10(src="$lib/assets/logo.png" alt="ロゴ")
          h1.text-xl 川崎工科高等学校
        input#hamburgbtn.hidden(type="checkbox" bind:checked="{checked}")
        label.p-3.cursor-pointer.rounded-lg(for="hamburgbtn" class="md:hidden hover:bg-blue-300/50")
          +each('Array(3) as _'): div
        #menu(class="max-md:hidden max-md:w-full max-md:pb-5 max-md:pt-1")
          .flex.text-center(class="max-md:flex-col max-md:w-full max-md:divide-y max-md:divide-blue-300 max-md:border max-md:border-blue-300 max-md:rounded-lg")
            +each('links as link')
              a.p-3(href="{link.href}" class="hover:bg-blue-300/50 md:rounded-lg") { link.text }
</template>
