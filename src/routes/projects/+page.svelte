<script>
  import '../../app.css'
	import Footer from '../../components/Footer.svelte';
  import Navbar from '../../components/Navbar.svelte';
</script>
<svelte:head>
  <title>Software Projects | Samuel V.</title>
</svelte:head>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main>
  <div id="myProj">
    <p class="text-center pt-3">Below are links to all of the development projects I've done.</p>
    <div class="links">
      <div class="cards">
        <a href="https://github.com/svalencia014/FSCalculations" class="card" target="_blank">
          <h3>Flight Sim Fuel Calculator</h3>
          <p>A personal project I did for fun in 8th Grade.</p>
        </a>
        <a href="https://github.com/svalencia014/openscopeCoordinateConverter" class="card" target="_blank">
          <h3>OpenScope Coordinate Converter</h3>
          <p>Tool that converts VRC coordinates to the format used by Openscope.</p>
        </a>
        <a href="https://github.com/svalencia014/VRCGame" class="card" target="_blank">
          <h3>VrcGame</h3>
          <p>A game utilizing VRC as the UI.</p>
        </a>
      </div>
    </div>
  </div>
  <div id="foss">
    <p class="text-center">Below are links to all of the open source projects I've contributed to.</p>
    <div class="links">
      <div class="cards">
        <a href="https://github.com/openscope/openscope" class="card" target="_blank"> 
          <h3>Openscope</h3>
          <p>openScope Air Traffic Control Simulator</p>
        </a>
        <a href="https://github.com/mmp/vice" class="card" target="_blank">
          <h3>Vice ATC Simulator</h3>
          <p>Vrtual air traffic control simulator</p>
        </a>
      </div>
    </div>
  </div>
</main>
<footer>
  <Footer />
</footer>