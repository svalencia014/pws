<script lang="ts">
  let { data } = $props();
  console.log(data.pageData);
</script>

<svelte:head>
  <title>Software Projects | Samuel V.</title>
</svelte:head>

<main>
  <div id="myProj" class="pb-5">
    <p class="text-center pt-6">Here are some of the best projects I've done throughout the years.</p>
    <div class="links pt-3">
      <div class="cards">
        <a href="https://github.com/svalencia014/FSCalculations" class="card" target="_blank">
          <h3>Flight Sim Fuel Calculator</h3>
          <p>A personal project I did for fun in 8th Grade.</p>
        </a>
        <a href="https://github.com/svalencia014/openscopeCoordinateConverter" class="card" target="_blank">
          <h3>OpenScope Coord Converter</h3>
          <p>Tool that converts VRC coordinates to the format used by Openscope.</p>
        </a>
        <a href="https://github.com/svalencia014/cidersteelseries" class="card" target="_blank">
          <h3>Cider Steelseries</h3>
          <p>Shows now playing info from Cider on a Steelseries OLED display</p>
        </a>
      </div>
    </div>
  </div>
  <hr>
  <div class="pb-5" id="foss">
    <p class="text-center pt-6">Here are some open source projects I've contributed to.</p>
    <div class="links pt-3">
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
  <hr>
  <div id="skills">
    <p class="text-center pt-6">Here are some of the languages I've used for public projects.</p>
    <div class="links pt-3">
      <div class="cards">
        {#each data.pageData.languages as language}
          {#if language.projects == 0}
            <div class="card">
              <h1>{language.name}</h1>
              <p>No Public Projects <i>yet</i></p>
            </div>
          {:else}
            <a href="https://github.com/svalencia014?tab=repositories&language={language.name}" class="card" target="_blank">
              <h1>{language.name}</h1>
              <p>{language.projects} {language.projects == 1 ? "public project" : "public projects"}</p>
            </a>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</main>