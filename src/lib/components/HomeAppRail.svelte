<script lang="ts">
  import { AppRailTile } from "@skeletonlabs/skeleton";
  export let group: string;
  export let title: string = "";
  export let showText: boolean = true;
  export let tildeValue: string;
  export let onclick: Function = (tildeValue: string) => {};
</script>

<AppRailTile bind:group name={`tilde-${tildeValue}`} value={tildeValue} {title} on:click={() => onclick(tildeValue)}>
  <svelte:fragment slot="lead">
    <div class="flex justify-center">
      <slot />
    </div>
  </svelte:fragment>
  {#if showText}
    <span>{title}</span>
  {/if}
</AppRailTile>
