<script lang="ts">
  import Container from '$lib/Container.svelte'

  import { ChevronRight } from 'lucide-svelte'
</script>

<template lang="pug">
  .relative.h-screen
      img.h-screen.w-screen.object-cover.absolute.brightness-125.select-none(
        width="300px"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Kawasaki_Koka.jpg"
      )
      .absolute.w-full(class="top-2/4 md:left-1/4")
        .flex.flex-col(class="max-md:items-center"): div
          h1.text-7xl.font-medium.text-slate-300(class="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]") 試される大地
          h3.text-4xl.mt-1.font-medium.text-slate-100(class="drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]") 鋼に感謝を込めて
  .py-5: Container
    .flex.flex-col.gap-10
      .flex.flex-col.items-start.gap-3.items-center.text-center
        h1.text-4xl.font-bold 学校概要
        .bg-red-300.w-32.h-1
        p.text-md.text-slate-500(class="md:px-20") 当校では、科学技術の発展に寄与し、広く世界で活躍しようという向上心を持ち、豊かな教養と創造力のある人間の育成を目指す。
        a(href='/summary')
          button.border.border-red-400.text-red-600.px-6.py-2.rounded-full.flex.items-center.gap-1(class="hover:bg-red-400 hover:text-white")
            | もっと読む
            ChevronRight(size="15")
      .flex.flex-col.items-start.gap-3.items-center.text-center
        h1.text-4xl.font-bold コース
        .bg-green-300.w-32.h-1
        p.text-md.text-slate-500 川崎工科は6つのコースを持っています。コースに見合ったカリキュラムや進路を見つけることができます。
        .grid.gap-8(class="md:grid-cols-3")
          .bg-red-100.shadow-md.rounded-xl.p-4(class="hover:shadow-none")
            h3.text-lg.font-bold 化学系
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac lorem placerat, imperdiet erat hendrerit, egestas dui. Nulla at vehicula erat, pellentesque aliquam ipsum. Integer scelerisque congue semper.
          .bg-green-100.shadow-md.rounded-xl.p-4(class="hover:shadow-none")
            h3.text-lg.font-bold 電気系
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac lorem placerat, imperdiet erat hendrerit, egestas dui. Nulla at vehicula erat, pellentesque aliquam ipsum. Integer scelerisque congue semper.
          .bg-sky-100.shadow-md.rounded-xl.p-4(class="hover:shadow-none")
            h3.text-lg.font-bold 機械系
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac lorem placerat, imperdiet erat hendrerit, egestas dui. Nulla at vehicula erat, pellentesque aliquam ipsum. Integer scelerisque congue semper.
        a(href='/courses')
          button.border.border-green-400.text-green-600.px-6.py-2.rounded-full.flex.items-center.gap-1(class="hover:bg-green-400 hover:text-white") 全コースを見る
      .flex.flex-col.items-start.gap-3.items-center
        a.inline-flex.gap-3.items-center(href='/news')
          h1.text-4xl.font-bold お知らせ
          ChevronRight
        .bg-amber-300.w-32.h-1
        .flex.flex-col.divide-y.divide-slate-400
          +each('Array(5) as item')
            .py-2
              p.text-lg.font-bold Lorem ipsum
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        a(href='/news')
          button.border.border-amber-400.text-amber-600.px-6.py-2.rounded-full.flex.items-center.gap-1(class="hover:bg-amber-400 hover:text-white") すべて見る
</template>
