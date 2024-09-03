<script>
 import {createDialog, melt} from '@melt-ui/svelte';
 import {fade, fly} from 'svelte/transition';
 import {X, Menu} from 'lucide-svelte';

 const {
  elements: {trigger, overlay, content, title, description, close, portalled},
  states: {open}
 } = createDialog({
  forceVisible: true
 });
</script>

<button use:melt={$trigger}>
 <Menu class="size-5" />
</button>
{#if $open}
 <div class="" use:melt={$portalled}>
  <div
   use:melt={$overlay}
   class="fixed inset-0 z-50 bg-black/50"
   transition:fade={{duration: 150}}
  />
  <div
   use:melt={$content}
   class="fixed left-0 top-0 z-50 h-screen w-full max-w-[350px] bg-white p-6
            shadow-lg focus:outline-none"
   transition:fly={{
    x: -350,
    duration: 300,
    opacity: 1
   }}
  >
   <button
    use:melt={$close}
    aria-label="Close"
    class="absolute right-[10px] top-[10px] inline-flex h-6 w-6
                appearance-none items-center justify-center rounded-full text-base4
                hover:bg-base4 focus:shadow-base4 focus:outline-none focus:ring-2
                focus:ring-base4"
   >
    <X class="size-4" />
   </button>
   <h2 use:melt={$title} class="mb-0 text-lg font-medium text-black">menu</h2>
   <p use:melt={$description} class="mb-5 mt-2 leading-normal">navbar next</p>
  </div>
 </div>
{/if}
