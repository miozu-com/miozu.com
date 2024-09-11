<script>
 import Header from '$features/layout/Header.svelte';
 import Footer from '$features/layout/Footer.svelte';
 import '../app.css';

 let {children} = $props();

 let headerEl = $state(null),
  footerEl = $state(null),
  contentEl = $state(null);
 let innerHeight = $state(0);
 let innerWidth = $state(0);
 let headerHeight = $state(0);
 let footerHeight = $state(0);

 let contentHeight = $derived(innerHeight - headerHeight - footerHeight);

 $effect(() => {
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
 style="min-width: {innerWidth}; max-width: {innerWidth};"
>
 <Header bind:headerEl />
 <div bind:this={contentEl} style="min-height: {contentHeight}px;" class="flex-grow">
  {@render children()}
 </div>
 <Footer bind:footerEl />
</div>
