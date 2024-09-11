<script>
 import {browser} from '$app/environment';

 let isDarkMode = $state(true);

 function handleToggleIsDarkMode() {
  isDarkMode = !isDarkMode;

  isDarkMode ?
   document.documentElement.classList.add('dark')
  : document.documentElement.classList.remove('dark');
 }

 $effect(() => {
  if (!browser) return;
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
   document.documentElement.classList.add('dark');
   isDarkMode = true;
  } else {
   document.documentElement.classList.remove('dark');
   isDarkMode = false;
  }
 });
</script>

<div>
 <input checked={isDarkMode} onclick={handleToggleIsDarkMode} type="checkbox" id="theme-toggle" />
 <label for="theme-toggle">
  {#if isDarkMode}
   +
  {:else}
   -
  {/if}
 </label>
</div>

<style lang="postcss">
 #theme-toggle {
  @apply invisible hidden select-none;
 }

 #theme-toggle + label {
  @apply block cursor-pointer;
 }

 #theme-toggle:not(:checked) + label {
  @apply text-base3;
 }

 #theme-toggle:checked + label {
  @apply text-base7;
 }
</style>
