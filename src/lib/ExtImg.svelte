<script lang="ts">
  export let src: string
</script>

<!-- todo: Replace with local infrastructure -->

<!-- svelte-ignore a11y-missing-attribute -->
<img
  src="https://external-content.duckduckgo.com/iu/?u={encodeURIComponent(src)}"
  {...Object.fromEntries(
    Object.entries($$restProps).map(entry => {
      return [entry[0], entry[1] === true ? '' : entry[1]]
    })
  )}
/>
