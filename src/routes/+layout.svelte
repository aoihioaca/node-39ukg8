<script lang="ts">
  import { page } from '$app/stores'
  import Container from '$lib/Container.svelte'
  import Footer from '$lib/Footer.svelte'
  import Header from '$lib/Header.svelte'
  import '../app.sss'
</script>

<Header />
<div min-hscreen flex="~ col">
  {#if $page.url.pathname !== '/'}
    <div h="20 md:28" />
    <grow>
      <Container>
        <slot />
      </Container>
    </grow>
  {:else}
    <grow>
      <slot />
    </grow>
  {/if}
  <Footer />
</div>
