<script lang="ts">
  let data: HTMLElement
</script>

<svelte:head>
  {#if data}
    <title>{data.innerText} - かわこう</title>
  {/if}
</svelte:head>
<div flex="~ col" items-center gap2 mb5>
  <h1 text-3xl fwbold bind:this={data}>
    <slot />
  </h1>
  <div bg-green300 w14 h1 />
</div>
