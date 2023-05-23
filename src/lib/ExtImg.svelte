<script lang="ts">
  import { mapUnoProps } from './map_uno'

  export let src: string
</script>

<!-- todo: Replace with local infrastructure -->

<!-- svelte-ignore a11y-missing-attribute -->
<img
  src="https://external-content.duckduckgo.com/iu/?u={encodeURIComponent(src)}"
  {...mapUnoProps($$restProps)}
/>
