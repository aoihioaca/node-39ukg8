<script lang="ts">
  import Container from '$lib/Container.svelte'
</script>

<template lang="pug">
  footer.bg-red-100.mt-3.p-5: Container
    .flex.gap-4.items-center
      img.h-14(src="$lib/assets/logo.png")
      div
        p.text-md 神奈川県立
        p.text-xl 川崎工科高等学校
        p.text-md Kawasaki Senior High School of Science and Technology
    p 〒211-0013 川崎市中原区上平間1700-7
    p
      | TEL: 
      a.link(href="tel:+810445110114") (044) 511-0114
</template>
