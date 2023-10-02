<script>
  import "../../app.css"
  import Navbar from "../../components/Navbar.svelte";
  export let data;
</script>
<svelte:head>
  <title>About | Samuel V.</title>
</svelte:head>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main style="text-align: center;">
  <p class="pt-2">I am a high school student from Indianapolis, IN who is currently studying to become a software engineer.</p>
  <p class="pb-2">I also am studying media production and produce content for my school's news.</p>
  <hr>
  <h1 class="text-3xl pt-4">Skills</h1>
  <div class="links">
    <div class="cards">
      {#each data.languages as language}
        {#if language.projects == 0}
          <div class="card">
            <h1>{language.name}</h1>
            <p>No Public Projects <i>yet</i></p>
          </div>
        {:else if language.projects == 1}
          <a href="https://github.com/svalencia014?tab=repositories&language={language.name}" class="card" target="_blank">
            <h1>{language.name}</h1>
            <p>{language.projects} public project</p>
          </a>
        {:else}
        <a href="https://github.com/svalencia014?tab=repositories&language={language.name}" class="card" target="_blank">
          <h1>{language.name}</h1>
          <p>{language.projects} public projects</p>
        </a>
        {/if}
      {/each}
    </div>
  </div>
</main>