<script>
  import Navbar from "../components/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
</script>
<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@300&display=swap");
  </style>
  <title>Samuel V.</title>
</svelte:head>
<style>
  :global(main) {
    color: #f5821f;
    padding-left: 5px;
  }
  :global(body) {
    background: #4d2c2b;
    margin: 0;
  }
  :global(.topnav) {
    overflow: hidden;
    background-color: #3a3434;
    font-family: "Bebas Neue", cursive;
  }
  :global(.topnav .icon) {
    display: none;
  }
  :global(.topnav a ) {
    float: left;
    color: #f5821f;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 20px
  }
  :global(.topnav a:hover, .card:hover) {
    background-color: #ddd;
    color: black;
  }
  :global(.topnav a.active) {
    background-color: #66746f;
    color: white;
  }
  :global(.links) {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5rem;
  }
  :global(p, form) {
    font-family: "Stick no Bills", sans-serif;
    font-size: 20px;
  }
  :global(td) {
    border: #ecbebe 2px solid;
  }
  :global(li) {
    color: #ecbebe;
    font-family: "Bebas Neue", cursive;
  }
  :global(.banners img) {
    width: 23rem;
  }
  :global(.cards) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
  }
  :global(.card, .nocard) {
    padding: 1rem;
    width: 150px;
    text-align: center;
    text-decoration: none;
    overflow-wrap: break-word;
    padding: 2.5rem 0.5rem;
  }
  :global(.videocard) {
    border: 1px solid #f4c5b4;
    padding: 1rem;
    border-radius: .25rem;
    text-align: center;
    text-decoration: none;
    overflow-wrap: break-word;
    padding: 2.5rem 0.5rem;
    width: 500px;
  }
  :global(.banners) {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10rem;
    width: 100%;
  }
  @media only screen and (max-width: 1110px) {
    .banners {
      grid-template-columns: auto auto;
      grid-gap: 3rem;
    }
  }
  @media only screen and (max-width: 855px) {
  .banners {
    grid-template-columns: auto;
    grid-gap: 1rem;
  }
}
@media only screen and (max-width: 545px) {
  :global(.topnav a:not(:first-child)) {display: none;}
  :global(.topnav a.icon, .fa-bars) {
    float: right;
    display: block;
    visibility: visible;
    padding: 0.5rem 0.5rem;
  }
  :global(.topnav.responsive) {position: relative;}
  :global(.topnav.responsive a.icon) {
    position: absolute;
    right: 0;
    top: 0;
  }
  :global(.topnav.responsive a) {
    float: none;
    display: block;
    text-align: left;
  }
  :global(.cards) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
  }
  :global(.videocard) {
    border: 1px solid #f4c5b4;
    padding: 1rem;
    border-radius: .25rem;
    text-align: center;
    text-decoration: none;
    overflow-wrap: break-word;
    padding: 2.5rem 0.5rem;
    width: 100%;
  }
  :global(.videocard > iframe) {
    height: 15rem;
    width: 20rem;
  }
  .nocard {
    padding: 1rem;
    width: 1rem;
    text-align: center;
    text-decoration: none;
    overflow-wrap: break-word;
    padding: 2.5rem 0.25rem;
  }
  .banners {
    display: grid;
    grid-template-columns: auto;
    width: 100%;
  }
  .banners img {
    width: 23rem;
  }
  .links {
    display: flex;
    justify-content: left;
    align-items: left;
    margin: 5px;
    width: 100%
   }
}
:global(.footer) {
  color: #ecbebe;
}
</style>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main>
  <p>
    Student learning computer science, YouTube content creator, and Virtual Air Traffic Controller
  </p>
  <hr>
  <div class="links">
    <div class="banners">
      <div class="nocard">
        <img src="https://github-readme-stats.vercel.app/api?username=svalencia014&theme=dracula" alt="GitHub Stats"/>
      </div>
      <div class="nocard">
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=svalencia014&theme=dracula&layout=compact" alt="Used Languages"/>
      </div>
      <div class="nocard">
        <img src="https://github-readme-streak-stats.herokuapp.com/demo/preview.php?user=svalencia014&theme=dracula&hide_border=true" alt="GitHub streak stats"/>
      </div>
      <div class="nocard">
        <img src="https://my.vatsim.net/indicators/1512132" alt="VATSIM Indicator"/>
      </div>
    </div>
  </div>
</main>
<hr>
<footer>
  <Footer />
</footer>