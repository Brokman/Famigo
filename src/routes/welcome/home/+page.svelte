<script lang="ts">
    import MdiAccountPlusOutline from "$lib/icons/MdiAccountPlusOutline.svelte";
import {user} from "$lib/store"
</script>

<div>
<div class="flex justify-center">
    <h1 class="h1">Home <strong>{$user}</strong></h1>
</div>
<div class="flex p-8">
    <div class="card p-4">
        <a href="/welcome/family" class="btn variant-filled">
            <span><MdiAccountPlusOutline /></span>
            <span>Add a family member</span>
        </a>
    </div>

</div>
</div>
