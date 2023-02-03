<script>
	export let show
	export let close
	export let title
  </script>

<main>
	<h1>Login</h1>
	<form action="?/login" method="POST" class="auth-form" autocomplete="off">
		<label for=""> Email </label>
		<input type="text" name="email" required/>
		<label for=""> Password </label>
		<input type="password" name="password" required/>
		<button type="submit" class="btn btn-primary">Login</button>
	</form>
</main>
