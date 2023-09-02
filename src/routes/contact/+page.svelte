<script>
  import '../../app.css'
  import Navbar from '../../components/Navbar.svelte';
  import Footer from '../../components/Footer.svelte';
</script>
<svelte:head>
  <title>Contact | Samuel V.</title>
</svelte:head>
<div class="topnav" id="myTopnav">
  <Navbar />
</div>
<main>
  <form method="post" action="http://api.svalencia.me:4000/submit" name="contact-form">
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" required>
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" required>
    </div>
    <div>
      <label for="message">Message</label>
      <textarea name="message" id="message" rows="10" cols="30" required></textarea>
    </div>
    <div>
      <input type="submit" value="Submit">
    </div>
  </form>
  <hr>
  <p>Or if you prefer a more <i>instant</i> option, you can join my <a href="https://discord.gg/a65sJ99D98">Discord Server</a></p>
  <hr/>
</main>
<footer>
  <Footer />
</footer>
