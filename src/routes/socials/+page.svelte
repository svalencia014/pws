<script>
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faTwitter, faTwitch, faYoutube, faDiscord, faLastfmSquare } from '@fortawesome/free-brands-svg-icons';
  import Icon from '@iconify/svelte';
  import kofi from '../../images/kofi.png'
</script>

<svelte:head>
  <title>Social Media | Samuel V.</title>
</svelte:head>

<p class="text-center text-2xl py-5">Here are links to my socials</p>
<div class="flex place-content-center gap-4">
  <a href="https://discord.gg/invite/a65sJ99D98" target="_blank">
    <Icon icon="mdi:discord" class="text-[#7289d9]" height="4rem"/>
  </a>
  <a href="https://last.fm/user/svalencia014" target="_blank">
    <Icon icon="mdi:lastfm" class="text-[#D01F3C]" height="4rem" />
  </a>
  <a href="https://twitch.tv/bifocalcanvas77" target="_blank">
    <Icon icon="mdi:twitch" class="text-[#6441a5]" height="4rem"/>
  </a>
  <a href="https://twitter.com/bifocalcanvas" target="_blank">
    <Icon icon="mdi:twitter" class="text-[#1DA1F2]" height="4rem"/>
  </a>
  <a href="https://youtube.com/@bifocalcanvas" target="_blank">
    <Icon icon="mdi:youtube" class="text-[#FF0000]" height="4rem"/>
  </a>
</div>