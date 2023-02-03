<script>
</script>

<div class="container">
	<div class="neat">
		<span class="soon">Coming Soon</span>
		<div class="sub">
			<h2>GitHub OAuth</h2>
			<form action="/ldap" method="POST" class="auth-form" autocomplete="off">
				<input type="text" name="url" id="url" placeholder="Rancher URL" disabled />
				<input type="text" name="token" id="token" placeholder="Admin Token" disabled />
				<button type="submit" class="btn btn-primary" disabled>Enable</button>
			</form>
		</div>
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
		filter: brightness(35%);
		cursor: not-allowed;
		box-shadow: 0px 1px 2px 0px rgba(36, 83, 255, 0.7), 1px 2px 4px 0px rgba(36, 83, 255, 0.7),
			2px 4px 8px 0px rgba(36, 83, 255, 0.7), 2px 4px 16px 0px rgba(36, 83, 255, 0.7);
	}

	input {
		background-color: #fff;
		color: #000;
		cursor: not-allowed;
	}

	h2 {
		color: #fff;
	}

	p {
		color: #000;
	}

	button {
		border-radius: 5px;
		text-transform: uppercase;
		font-weight: bold;
		cursor: not-allowed;
	}

	span {
		color: orange;
		position: absolute;
		font-size: 60px;
		z-index: 1;
		rotate: 20deg;
		top: 80%;
		right: 37%;
		text-transform: uppercase;
		cursor: not-allowed;
		letter-spacing: 5px;
	}
</style>
