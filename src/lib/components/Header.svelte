<script>
 import ThemeSwitcher from '$components/ThemeSwitcher.svelte';
</script>

<header>
 <div id="logo">miozu</div>
 <ThemeSwitcher />
</header>

<style>
 #logo {
  @apply text-base7 dark:text-base3;
 }
 header {
  @apply h-24 w-full bg-base3 dark:bg-base7;
 }
</style>
