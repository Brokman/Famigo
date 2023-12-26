<script lang="ts">
  import { goto } from "$app/navigation";
  import GlowingLogo from "$lib/components/glowingLogo.svelte";
  import { user } from "$lib/store";

  import { getToastStore, type ToastSettings } from "@skeletonlabs/skeleton";

  const toastStore = getToastStore();

  const t: ToastSettings = {
    message: "Username must be at least 3 char long",
    background: 'variant-filled-error',
  };

  let userInput = "";
  let timer: NodeJS.Timeout;
  let debouncedAnimationClass = ''

  const debounce = () => {
    clearTimeout(timer);
    debouncedAnimationClass = "variant-filled-error animate-pulse"
		timer = setTimeout(() => {
      debouncedAnimationClass= ''
		}, 1000);
	}

  const handleOnClick = () => {
    toastStore.clear();

    if (userInput.length >= 3) {
      user.set(userInput);
      goto("/welcome/home");
    } else {
      toastStore.trigger(t);
      debounce()
    }
  };
</script>

<div class="container h-full mx-auto flex justify-center items-center">
  <GlowingLogo>
    <div class="card p-4 ">
      <h3 class="h3 pb-8">Login</h3>
      <label class="label">
        <span>Username</span>
        <input
          on:keypress={(e) => {
            if (e.key === "Enter") {
              handleOnClick();
            }
          }}
          bind:value={userInput}
          class="input invalid:border-error-500 {debouncedAnimationClass}"
          type="text"
          placeholder="Enter your username..."
          minlength={3}
        />
      </label>
      <div class="flex justify-end pt-8">
        <button
          on:click={handleOnClick}
          type="button"
          class="btn variant-filled-primary">Login</button
        >
      </div>
    </div>
  </GlowingLogo>
</div>
