<script>
</script>

<div class="container">
	<h2>OpenLDAP</h2>
	<p>Setup OpenLDAP Auth</p>

	<form action="/ldap" method="POST" class="auth-form">
		<input type="text" name="url" id="url" placeholder="Rancher URL" />
		<input type="text" name="token" id="token" placeholder="Admin Token" />
		<button type="submit" class="btn btn-primary">Enable OpenLDAP</button>
	</form>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #565c59;
		height: 300px;
		width: 600px;
		border-radius: 5px;
		margin: 30px;
		box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
	}

	input {
		background-color: #fff;
		color: #000;
	}

	h2 {
		color: #000;
	}

	p {
		color: #000;
	}

	button {
		border-radius: 5px;
	}
</style>
