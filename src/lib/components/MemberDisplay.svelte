<script lang="ts">
    import MdiBabyFaceOutline from "$lib/icons/MdiBabyFaceOutline.svelte";
    import MdiDog from "$lib/icons/MdiDog.svelte";
    import MdiFaceManOutline from "$lib/icons/MdiFaceManOutline.svelte";
    import MdiFaceWomanOutline from "$lib/icons/MdiFaceWomanOutline.svelte";

    export let member;

    const memberIcons = {
        male: MdiFaceManOutline,
        female: MdiFaceWomanOutline,
        baby: MdiBabyFaceOutline,
        dog: MdiDog
    }
</script>

<div class="card card-hover variant-ghost space-y-1">
    <span class="badge bg-primary-500 ml-2"><svelte:component this={memberIcons[member.icon]} /></span>
    <span class="flex-auto">
        <dt class="text-lg font-bold">{member.name}</dt>
        <dd class="opacity-45 -mt-1">{member.role}</dd>
    </span>
</div>