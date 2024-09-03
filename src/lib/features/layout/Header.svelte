<script>
 import ThemeSwitcher from '$features/theme/ThemeSwitcher.svelte';
 import Drawer from '$features/nav/Drawer.svelte';
 import {Github} from 'lucide-svelte';
 import {githubRepo} from '$lib/settings/global';

 export let headerEl;
</script>

<header bind:this={headerEl}>
 <div id="logo">miozu</div>
 <div class="flex items-center">
  <a href={githubRepo} _target="blanc" class="cursor-pointer">
   <Github class="size-5" />
  </a>
  <ThemeSwitcher class="mr-4" />
  <Drawer />
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
