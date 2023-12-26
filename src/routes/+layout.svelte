<script lang="ts">
  import "../app.postcss";
  import { AppShell, AppBar, LightSwitch, Toast } from "@skeletonlabs/skeleton";
  // Floating UI for Popups
  import {
    computePosition,
    autoUpdate,
    flip,
    shift,
    offset,
    arrow,
  } from "@floating-ui/dom";
  import { storePopup } from "@skeletonlabs/skeleton";
  import { initializeStores } from "@skeletonlabs/skeleton";

  initializeStores();
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Toast />
<!-- App Shell -->
<AppShell>
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar>
      <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">FAMIGO</strong>
      </svelte:fragment>
      <svelte:fragment slot="trail">
        <LightSwitch />
        <a
          class="btn btn-sm variant-ghost-surface"
          href="https://github.com/Brokman/Famigo"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
</AppShell>
