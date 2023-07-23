<script>
  import '../../app.css'
  import Navbar from '../../components/Navbar.svelte';
  import Footer from '../../components/Footer.svelte';
</script>
<svelte:head>
  <title>VATSIM | Samuel V.</title>
</svelte:head>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main>
  <p>Virtual Air Traffic Simulation (VATSIM) Network is a nonprofit organization that operates an online flight-simulation network noted for its realism.</p>
  <p>I control ZJX (Jacksonville), ZHU (Houston), ZID (Indianapolis) on the VATSIM Network</p>
  <p>Here are some of my favorite VATSIM timelapse videos:</p>
  <div class="links">
    <div class="cards">
      <div class="videocard">
        <h3>Controlling During Hurricane Ian</h3>
        <p>October 14, 2022</p>
        <iframe src="https://www.youtube.com/embed/M2dJPJJvWwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
  <hr>
  <div class="links">
  <div class="cards">
    <div class="videocard">
    <h3>VATSIM Timelapse Playlist</h3>
    <p></p>
    <iframe src="https://www.youtube.com/embed/videoseries?list=PLtihvRVz0gmdpQVahjujkbcscHZz6Umue" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  </div>
  </div>
  <hr/>
</main>
<footer>
  <Footer />
</footer>