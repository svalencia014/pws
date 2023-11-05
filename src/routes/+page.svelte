<script>
  import Navbar from "../components/Navbar.svelte";
</script>
<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@300&display=swap");
  </style>
  <title>Samuel V.</title>
</svelte:head>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main>
  <p class="text-center py-5">
    Student learning computer science, YouTube content creator, and Virtual Air Traffic Controller
  </p>
  <hr>
  <div class="links">
    <div class="banners">
      <div class="nocard">
        <img src="https://vercel.svalencia.me/api?username=svalencia014&show_icons=true&theme=dracula" alt="GitHub Stats"/>
      </div>
      <div class="nocard">
        <img src="https://vercel.svalencia.me/api/top-langs?username=svalencia014&theme=dracula&layout=compact" alt="Used Languages"/>
      </div>
      <div class="nocard">
        <img src="https://github-readme-streak-stats.herokuapp.com?user=svalencia014&theme=dracula" alt="GitHub streak stats"/>
      </div>
    </div>
  </div>
</main>