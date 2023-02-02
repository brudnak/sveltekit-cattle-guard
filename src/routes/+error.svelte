<script>
    import { page } from '$app/stores';
  </script>
  
  <main>
    <h1>{$page.error.message}</h1>
    <a href="/" class="btn btn-primary">Home</a>
  </main>


