<script lang="ts">
	import { page } from "$app/stores";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = $derived($page.url.pathname);
</script>

<Navbar class="bg-white">
  <NavBrand class="text-white" href="/">
    <p>Samuel Valencia</p>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
  </NavUl>
</Navbar>