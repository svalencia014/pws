<script>
  import '$lib/app.css'
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
</script>

<div class="topnav" id="myTopnav">
  <Navbar />
</div>

<slot />

<footer>
  <Footer />
</footer>
