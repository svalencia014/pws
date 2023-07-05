<script>
  import Navbar from "../../components/Navbar.svelte";
  import Footer from "../../components/Footer.svelte";
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
</style>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main>
  <p>Socials</p>
</main>
<hr>
<footer>
  <Footer />
</footer>