<script lang="ts">
	let data;
</script>

<template lang="pug">
  svelte:head
    +if("data")
      title { data?.innerText } - かわこう
  .flex.flex-col.items-center.gap-2.mb-5
    h1.text-3xl.font-bold(bind:this!="{data}"): slot
    .bg-green-300.w-14.h-1
</template>