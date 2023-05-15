<script lang="ts">
  import Title from '$lib/Title.svelte'
</script>

<template lang="pug">
  Title コース
  .flex.flex-col.gap-12
    .flex.gap-5
      img.object-cover.w-1.rounded-xl(
        src="https://www.pen-kanagawa.ed.jp/kawasakikoka-th/images/bunkasai.jpg"
        class="basis-5/12"
      )
      .shadow-lg.rounded-xl.bg-red-200.p-5(class="hover:shadow-md basis-7/12")
        h1.font-bold.text-xl.mb-3 情報メディアコース
        p 説明
    .flex.gap-5
      img.object-cover.w-1.rounded-xl(
        src="https://www.pen-kanagawa.ed.jp/kawasakikoka-th/images/bunkasai.jpg"
        class="basis-5/12"
      )
      .shadow-lg.rounded-xl.bg-red-200.p-5(class="hover:shadow-md basis-7/12")
        h1.font-bold.text-xl.mb-3 電気テクノロジーコース
        p 説明
</template>
