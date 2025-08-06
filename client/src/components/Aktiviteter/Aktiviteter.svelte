<script>
  import { onMount } from 'svelte';

  let aktiviteter = [];
  let error = '';

  onMount(async () => {
    const token = localStorage.getItem('token');

    try {
      const res = await fetch('http://localhost:8080/api/experiences', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!res.ok) {
        throw new Error('No activities available');
      }

      aktiviteter = await res.json();
    } catch (err) {
      error = err.message;
    }
  });
</script>

<h2>Aktiviteter i Schweiz</h2>

{#if error}
  <p style="color: red">{error}</p>
{:else if aktiviteter.length === 0}
  <p>Ingen aktiviteter fundet.</p>
{:else}
  <ul>
    {#each aktiviteter as aktivitet}
      <li>
        <strong>{aktivitet.title}</strong><br />
        {aktivitet.description}
      </li>
    {/each}
  </ul>
{/if}
