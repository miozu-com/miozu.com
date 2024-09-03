<script>
 import {browser} from '$app/environment';
 import {Sun, Moon} from 'lucide-svelte';

 let isDarkMode = true;

 function handleToggleIsDarkMode() {
  isDarkMode = !isDarkMode;

  isDarkMode ?
   document.documentElement.classList.add('dark')
  : document.documentElement.classList.remove('dark');
 }

 $: if (browser) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
   document.documentElement.classList.add('dark');
   isDarkMode = true;
  } else {
   document.documentElement.classList.remove('dark');
   isDarkMode = false;
  }
 }
</script>

<div>
 <input checked={isDarkMode} on:click={handleToggleIsDarkMode} type="checkbox" id="theme-toggle" />
 <label for="theme-toggle">
  {#if isDarkMode}
   <Moon class="size-5" />
  {:else}
   <Sun class="size-5" />
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
