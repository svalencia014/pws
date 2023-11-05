<a href="/" class="active" id="index">Samuel Valencia</a>
<a href="/about" id="about">About Me</a>
<a href="/contact" id="contact">Contact Me</a>
<a href="/projects" id="projects">Projects</a>
<a href="/socials" id="socials">My Socials</a>
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
    if (path == "") {
      path = "index";
    }
    console.log(document.getElementById(path))
    if (document.getElementById(path) != null) {
        document.querySelector(".active").classList.remove("active");
        document.getElementById(path).className = "active";
    } else {
      document.querySelector('.active').classList.remove('active');
    }
  })
</script>