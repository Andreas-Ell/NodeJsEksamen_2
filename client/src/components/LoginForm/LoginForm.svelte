<script>
  import { push } from 'svelte-spa-router';
  let username = '';
  let password = '';
  let error = '';
  let success = false;

  const handleLogin = async () => {
    error = '';
    success = false;

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        success = true;
        push('/forside');
      } else {
        error = data.error || 'Something went wrong';
      }
    } catch (err) {
      error = 'Server error';
    }
  };
</script>

<form on:submit|preventDefault={handleLogin}>
  <h2>Login</h2>
  <input type="text" bind:value={username} placeholder="Brugernavn" required />
  <input type="password" bind:value={password} placeholder="Kodeord" required />
  <button type="submit">Log in</button>

  {#if error}
    <p style="color: red">{error}</p>
  {/if}
  {#if success}
    <p style="color: green">Login lykkedes!</p>
  {/if}
</form>
