<script>
  import '$lib/app.css'
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
</script>

<div class="w-screen h-screen bg-transparent min-w-fit">
  <div>
    <Navbar/>
  </div>

  <slot />

  <footer id="page-footer">
    <div class="content content-full">
			<Footer />
		</div>
  </footer>
</div>
