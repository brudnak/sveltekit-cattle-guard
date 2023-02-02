<script>
</script>

<div class="container">
	<div class="sub">
		<h2>OpenLDAP</h2>
		<p>Setup OpenLDAP Auth</p>
		<form action="/ldap" method="POST" class="auth-form" autocomplete="off">
			<input type="text" name="url" id="url" placeholder="Rancher URL" />
			<input type="text" name="token" id="token" placeholder="Admin Token" />
			<button type="submit" class="btn btn-primary">Enable OpenLDAP</button>
		</form>
	</div>
</div>

<style>
	.sub {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #83858c;
		height: 300px;
		width: 600px;
		border-radius: 5px;
		margin: 30px;
		box-shadow: 0px 1px 2px 0px rgba(36, 83, 255, 0.7), 1px 2px 4px 0px rgba(36, 83, 255, 0.7),
		2px 4px 8px 0px rgba(36, 83, 255, 0.7), 2px 4px 16px 0px rgba(36, 83, 255, 0.7);
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
