<a href="/" class="active" id="index">Samuel Valencia</a>
<a href="/social" id="social">My Socials</a>
<a href="/projects" id="projects">Projects</a>
<a href="/vatsim" id="vatsim">VATSIM ATC</a>
<a href="/contact" id="contact">Contact Me</a>
<a href={"#"} class="icon" on:click={myFunction}>
  <FontAwesomeIcon class="fa-solid fa-bars" icon="bars" />
</a>
<script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faBars as fasBars } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from 'fontawesome-svelte';
  import { onMount } from 'svelte';
  library.add(fasBars);
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.classList.contains("responsive")) {
      x.classList.remove("responsive");
    } else {
      x.classList.add("responsive");
    }
  }
  onMount(() => {
    let path = window.location.pathname.replace("/", "");
    if (document.getElementById(path) != null) {
      if (path == "") {
        document.querySelector(".active").classList.remove("active");
        document.getElementById("index").classList.add("active");
      } else {
        document.querySelector(".active").classList.remove("active");
        document.getElementById(path).className = "active";
      }
    } else {
      document.querySelector('.active').classList.remove('active');
    }
  })
</script>