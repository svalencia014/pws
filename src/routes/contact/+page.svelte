<script>
  import '../../app.css'
  import Navbar from '../../components/Navbar.svelte';
  import Footer from '../../components/Footer.svelte';
  import { redirect } from '@sveltejs/kit';
  import { useForm, validators, email, required } from 'svelte-use-form';
  export let data;
  /** @type {import('./$types').PageData} */
  const form = useForm();
</script>
<svelte:head>
  <title>Contact | Samuel V.</title>
</svelte:head>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main>
  <div class="py-3">
    <form use:form method="POST">
      <div class="py-3 text-center">
        <label class="text-xl" for="name">Name:</label>
        <br>
        <input type="text" name="name" id="name" use:validators={[required]}>
      </div>
      <div class="py-3 text-center">
        <label class="text-xl" for="email">Email:</label>
        <br>
        <input type="email" name="email" id="email" use:validators={[email, required]}>
      </div>
      <div class="py-3 text-center">
        <label class="text-xl" for="message">Message:</label>
        <textarea name="message" id="message" rows="10" cols="30" use:validators={[required]}></textarea>
      </div>
      <div class="py-3 text-center">
        <button disabled={!$form.valid} type="submit">Submit</button>
      </div>
    </form>
  </div>
</main>
<footer>
  <Footer />
</footer>
