<script>
 import {onMount} from 'svelte';
 import Header from '$features/layout/Header.svelte';
 import Footer from '$features/layout/Footer.svelte';
 import '../app.css';

 let innerHeight;
 let innerWidth;
 let headerHeight = 0;
 let footerHeight = 0;
 let headerEl;
 let footerEl;
 let contentEl;

 $: contentHeight = innerHeight - headerHeight - footerHeight;

 onMount(() => {
  headerHeight = headerEl?.offsetHeight || 0;
  footerHeight = footerEl?.offsetHeight || 0;
 });

 function updateHeights() {
  headerHeight = headerEl?.offsetHeight || 0;
  footerHeight = footerEl?.offsetHeight || 0;
 }
</script>

<svelte:window bind:innerHeight bind:innerWidth on:resize={updateHeights} />

<div
 id="main"
 class="flex flex-col min-h-screen bg-white dark:bg-base2 dark:text-base7"
 style="min-width: {innerWidth}; max-width: {innerWidth}"
>
 <Header bind:headerEl />
 <div bind:this={contentEl} style="min-height: {contentHeight}px;" class="flex-grow">
  <slot />
 </div>
 <Footer bind:footerEl />
</div>
