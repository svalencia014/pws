<script>
  import '../../app.css'
  import Navbar from "../../components/Navbar.svelte";
</script>
<svelte:head>
  <title>Projects | Samuel V.</title>
</svelte:head>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main>
  <div class="links">
    <div class="cards">
      <a href="/projects/software" class="card">
        <h3>Software Projects</h3>
        <p>Programming/Software Development Projects</p>
      </a>
      <a href="/projects/videos" class="card">
        <h3>Video Projects</h3>
        <p>Video Editing Projects for school or freelance</p>
      </a>
    </div>
  </div>
</main>