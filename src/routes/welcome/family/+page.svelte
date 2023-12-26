<script lang="ts">
  import MemberDisplay from "$lib/components/MemberDisplay.svelte";
  import MdiAccountPlusOutline from "$lib/icons/MdiAccountPlusOutline.svelte";
  import { user } from "$lib/store";

  let familyData = {
    name: "Martin",
    members: [
      {
        role: "Dad-master",
        icon: "male",
        name: "Mark",
        age: "34",
      },
      {
        role: "Mom",
        icon: "female",
        name: "Cindy",
        age: "32",
      },
      {
        role: "B-b",
        icon: "baby",
        name: "Kily",
        age: "1",
      },
      {
        role: "Doggy",
        icon: "dog",
        name: "Canigo",
        age: "3",
      },
    ],
  };
</script>

<div>
  <div class="flex justify-center">
    <h1 class="h1">My Family <strong>{$user}</strong></h1>
  </div>
  <div class="px-8">
    <div class="w-1/4 p-4">
      <h4 class="h3 text-center w-full pb-4">Family {familyData.name}</h4>
      <dl class="list-dl space-y-2">
        {#each familyData.members as member}
          <MemberDisplay {member} />
        {/each}
        <div>
          <button class="btn variant-ghost-primary gap-2">
            <span>
              <MdiAccountPlusOutline />
            </span>
            Add a member
          </button>
        </div>
      </dl>
    </div>
  </div>
</div>
