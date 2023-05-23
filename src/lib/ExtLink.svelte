<script lang="ts">
  import { mapUnoProps } from './map_uno'

  export let textLink: boolean
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
  class={textLink ? 'link' : null}
  rel="external noreferrer noopener"
  target="_blank"
  {...mapUnoProps($$restProps)}
>
  <slot />
</a>
