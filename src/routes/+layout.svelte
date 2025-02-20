<script>
  import "../app.css";
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  /** @type {{children: import('svelte').Snippet}} */
  let { children } = $props();
</script>

<Header/>

<main>
  {@render children()}
</main>

<Footer/>
