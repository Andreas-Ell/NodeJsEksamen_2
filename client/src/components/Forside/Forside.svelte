<script>
  const username = localStorage.getItem('token') ? 'Bruger' : 'Gæst'; 
</script>

<h1>Velkommen til Schweiz-oplevelser</h1>
<p>Her kan du finde unikke aktiviteter og begivenheder i Schweiz.</p>

<p>Du er logget ind som: <strong>{username}</strong></p>

<nav>
  <ul>
    <li><a href="#/aktiviteter">Se oplevelser</a></li>
    <li><a href="/contact">Kontakt</a></li>
    <li><a href="/about">Om os</a></li>
  </ul>
</nav>
