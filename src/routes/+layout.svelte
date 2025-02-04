<script lang="ts">
  import '$lib/app.css'
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="w-screen h-screen min-w-fit bg-[#4d2c2b]">
  <div>
    <Navbar/>
  </div>

  <main class="font-stick-no-bills flex-col items-center justify-center pt-3 text-orange-400">
    {@render children?.()}
  </main>

  <footer id="page-footer">
    <div class="content content-full font-stick-no-bills text-red-200">
			<Footer />
		</div>
  </footer>
</div>
