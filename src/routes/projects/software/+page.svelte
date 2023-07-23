<script>
  import '../../../app.css'
	import Footer from '../../../components/Footer.svelte';
  import Navbar from '../../../components/Navbar.svelte';
</script>
<svelte:head>
  <title>Software Projects | Samuel V.</title>
</svelte:head>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main>
  <p>Below are links to all of my software development projects in chronological order.</p>
  <div class="links">
    <div class="cards">
      <a href="https://svalencia014.github.io/DarkgreenForthrightFirewall/" class="card" target="_blank">
        <h3>Vote for Jazmyne</h3>
        <p>A joke website made for a friend in 7th grade.</p>
      </a>
      <a href="https://codeprojects.org/0LphTJlwyW0RJQ23SHZoWAyXs0NNbaA5O0ZzSUXqfUw/index.html" class="card" target="_blank">
        <h3>Personal Website Project</h3>
        <p>One of the code.org projects I did in 8th Grade CS.</p>
      </a>
      <a href="https://github.com/svalencia014/FSCalculations" class="card" target="_blank">
        <h3>Flight Sim Fuel Calculator</h3>
        <p>A personal project I did for fun in 8th Grade.</p>
      </a>
      <a href="https://github.com/svalencia014/schoolBot" class="card" target="_blank">
        <h3>School Discord Bot</h3>
        <p>A discord bot I made for a school discord server in 9th Grade.</p>
      </a>
      <a href="https://github.com/svalencia014/openscopeCoordinateConverter" class="card" target="_blank">
        <h3>OpenScope Coordinate Converter</h3>
        <p>Tool that converts VRC coordinates to the format used by Openscope</p>
      </a>
    </div>
  </div>
</main>
<footer>
  <Footer />
</footer>