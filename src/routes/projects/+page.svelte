<script lang="ts">
  let { data } = $props();
</script>

<svelte:head>
  <title>Software Projects | Samuel V.</title>
</svelte:head>

<div class="pb-5">
  <p class="text-center pt-6 text-xl">Here are some of the best projects I've done throughout the years.</p>
  <div class="flex justify-center align-middle pt-3">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <a href="https://github.com/svalencia014/openscopeCoordinateConverter" class="p-4 text-center border-2 border-red-200 rounded-md w-40" target="_blank">
        <h3 class="font-bebas-neue text-xl text-emerald-500">OpenScope Coord Converter</h3>
        <p>Tool that converts VRC coordinates to the format used by Openscope.</p>
      </a>
      <a href="https://github.com/svalencia014/cidersteelseries" class="p-4 text-center border-2 border-red-200 rounded-md w-40" target="_blank">
        <h3 class="font-bebas-neue text-xl text-emerald-500">Cider Steelseries</h3>
        <p>Shows now playing info from Cider on a Steelseries OLED display</p>
      </a>
    </div>
  </div>
</div>
<hr>
<div class="pb-5">
  <p class="text-center pt-6 text-xl">Here are some open source projects I've contributed to.</p>
  <div class="flex justify-center align-middle pt-3">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <a href="https://github.com/openscope/openscope" class="p-4 text-center border-2 border-red-200 rounded-md w-40" target="_blank"> 
        <h3 class="font-bebas-neue text-xl text-emerald-500">Openscope</h3>
        <p>openScope Air Traffic Control Simulator</p>
      </a>
      <a href="https://github.com/mmp/vice" class="p-4 text-center border-2 border-red-200 rounded-md w-40" target="_blank">
        <h3 class="font-bebas-neue text-xl text-emerald-500">Vice ATC Simulator</h3>
        <p>Vrtual air traffic control simulator</p>
      </a>
    </div>
  </div>
</div>
<hr>
<div id="skills">
  <p class="text-center pt-6">Here are some of the languages I've used for public projects.</p>
  <div class="flex justify-center align-middle pt-3">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each data.pageData.languages as language}
        {#if language.projects == 0}
          <div class="p-4 text-center border-2 border-red-200 rounded-md w-40">
            <h1 class="font-bebas-neue text-xl text-emerald-500">{language.name}</h1>
            <p>No Public Projects <i>yet</i></p>
          </div>
        {:else}
          <a href="https://github.com/svalencia014?tab=repositories&language={language.name}" class="p-4 text-center border-2 border-red-200 rounded-md w-40" target="_blank">
            <h1 class="font-bebas-neue text-xl text-emerald-500">{language.name}</h1>
            <p>{language.projects} {language.projects == 1 ? "public project" : "public projects"}</p>
          </a>
        {/if}
      {/each}
    </div>
  </div>
</div>
