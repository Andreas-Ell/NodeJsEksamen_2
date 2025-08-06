<script>
  import { onMount } from 'svelte';
  import { push } from 'svelte-spa-router';

  export let component;

  let isAuthenticated = false;

  onMount(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      push('/');
    } else {
      isAuthenticated = true;
    }
  });
</script>

{#if isAuthenticated}
  <svelte:component this={component} />
{/if}
