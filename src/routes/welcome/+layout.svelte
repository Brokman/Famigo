<script lang="ts">
  import HomeAnalytics from "$lib/icons/HomeAnalytics.svelte";
  import MdiCalendarMultiselect from "$lib/icons/MdiCalendarMultiselect.svelte";
  import MdiExitRun from "$lib/icons/MdiExitRun.svelte";
  import MdiHomeAnalytics from "$lib/icons/MdiHomeAnalytics.svelte";
  import MdiHumanFemaleFemaleChild from "$lib/icons/MdiHumanFemaleFemaleChild.svelte";
  import {
    AppRail,
    AppRailAnchor,
    AppRailTile,
    AppShell,
  } from "@skeletonlabs/skeleton";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { tilde } from "$lib/store";
  import HomeAppRail from "$lib/components/HomeAppRail.svelte";

  const appRailTildes = [
    {
      value: "home",
      displayName: "Home",
      icon: MdiHomeAnalytics,
    },
    {
      value: "family",
      displayName: "My Family",
      icon: MdiHumanFemaleFemaleChild,
    },
    {
      value: "calendar",
      displayName: "Calendar",
      icon: MdiCalendarMultiselect,
    },
  ];

  const currentPageName = (pathname: string) => {
    let pageName: string;
    if (pathname.includes("calendar")) {
      pageName = "calendar";
    } else if (pathname.includes("family")) {
      pageName = "family";
    } else {
      pageName = "home";
    }

    return pageName;
  };

  let currentTile: string = currentPageName($page.url.pathname);
  let isMount = false;

  onMount(() => {
    isMount = true;
  });

  const handleChangeTilde = (tildeValue: string) => {
    if (isMount === false) return;
    goto(`/welcome/${tildeValue}`);
  };

  $: currentTile = currentPageName($page.url.pathname);
</script>

<AppShell>
  <!-- <svelte:fragment slot="header">Header</svelte:fragment> -->
  <svelte:fragment slot="sidebarLeft">
    <AppRail>
      <!-- <svelte:fragment slot="lead">
      <AppRailAnchor href="/">(icon)</AppRailAnchor>
    </svelte:fragment> -->
      <!-- --- -->
      {#each appRailTildes as tilde}
        <HomeAppRail
          bind:group={currentTile}
          tildeValue={tilde.value}
          title={tilde.displayName}
          onclick={handleChangeTilde}
        >
          <svelte:component this={tilde.icon} />
        </HomeAppRail>
      {/each}
      <!-- --- -->
      <svelte:fragment slot="trail">
        <AppRailAnchor href="/" title="Exit">
          <div class="flex justify-center"><MdiExitRun /></div>
        </AppRailAnchor>
      </svelte:fragment>
    </AppRail>
  </svelte:fragment>
  <!-- (sidebarRight) -->
  <!-- (pageHeader) -->
  <!-- Router Slot -->
  <slot />
  <!-- ---- / ---- -->
  <!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
  <!-- (footer) -->
</AppShell>
