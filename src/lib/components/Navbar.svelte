<script lang="ts">
	import { page } from "$app/state";
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  let activeUrl = page.url.pathname;
</script>

<Navbar color="none" class="bg-stone-700">
  <NavBrand class="text-white" href="/">
    <p>Samuel Valencia</p>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi class="font-xl" href="/">Home</NavLi>
  </NavUl>
</Navbar>