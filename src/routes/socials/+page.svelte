<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faTwitter, faTwitch, faYoutube, faDiscord, faLastfmSquare } from '@fortawesome/free-brands-svg-icons';
  import kofi from '../../images/kofi.png'
</script>
<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@300&display=swap");
  </style>
  <title>Social Media | Samuel V.</title>
</svelte:head>

<main>  
  <p class="text-center py-5">Here are links to my socials</p>
  <div class="socialRow place-content-center">
    <div class="socialElement">
      <a href="https://discord.gg/invite/a65sJ99D98" target="_blank">
        <Fa icon={faDiscord} class="fa-brands fa-discord fa-3x"/>
      </a>
    </div>
    <div class="socialElement">
      <a href="https://ko-fi.com/bifocalcanvas" target="_blank"> 
        <img src={kofi} alt="">
      </a>
    </div>
    <div class="socialElement">
      <a href="https://last.fm/user/svalencia014" target="_blank">
        <Fa icon={faLastfmSquare} alt="" class="fa-brands fa-lastfm fa-3x" style="color: #D01F3C" />
      </a>
    </div>
    <div class="socialElement">
      <a href="https://twitch.tv/bifocalcanvas77" target="_blank">
        <Fa icon={faTwitch} class="fa-brands fa-twitch fa-3x"/>
      </a>
    </div>
    <div class="socialElement">
      <a href="https://twitter.com/bifocalcanvas" target="_blank">
        <Fa icon={faTwitter} class="fa-brands fa-twitter fa-3x"/>
      </a>
    </div>
    <div class="socialElement">
      <a href="https://youtube.com/@bifocalcanvas" target="_blank">
        <Fa icon={faYoutube} class="fa-brands fa-youtube fa-3x"/>
      </a>
    </div>
  </div>
</main>