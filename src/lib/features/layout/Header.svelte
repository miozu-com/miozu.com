<script>
 import ThemeSwitcher from '$features/theme/ThemeSwitcher.svelte';
 import {githubRepo} from '$lib/settings/global';

 let {headerEl = $bindable()} = $props();
</script>

<header bind:this={headerEl}>
 <div id="logo">miozu</div>
 <div class="flex items-center">
  <a href={githubRepo} _target="blanc" class="cursor-pointer"> github </a>
  <ThemeSwitcher class="mr-4" />
 </div>
</header>

<style>
 header {
  @apply h-24 w-full flex items-center;
 }
 #logo {
  @apply mr-auto;
 }
</style>
