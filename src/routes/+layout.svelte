<script lang="ts">
  import '../app.sss'
  import Header from '$lib/Header.svelte'
  import Container from '$lib/Container.svelte'
  import Footer from '$lib/Footer.svelte'

  import { page } from '$app/stores'
</script>

<template lang="pug">
  Header
  .min-h-screen.flex.flex-col
    +if('$page.url.pathname !== "/"')
      .h-20(class="md:h-28")
      .grow: Container: slot
      +else(): .grow: slot
    Footer
</template>
