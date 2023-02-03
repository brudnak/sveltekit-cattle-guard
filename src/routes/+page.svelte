<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
	import OpenLdap from "./ldap/+page.svelte";
	import GitHub from "./github/+page.svelte";
</script>

<main>
	{#if data.session}
	<div style=" background-image: url(dark-ranch.svg); background-size: 60%; background-position: center; background-repeat: repeat;">
		<h1>Welcome, {data.session.user.email}</h1>

		<form action="/logout" method="POST">
			<button type="submit" class="btn btn-primary">Logout</button>
		</form>

		<div class="container">
			<OpenLdap />
			<GitHub />
		</div>
	</div>
	{:else}
	<div style=" background-image: url(ranch-light.svg); background-size: 55%; background-position: center; background-repeat: repeat">
		<div class="container" style="overflow: hidden; max-height: 100%;">
		<div class="page" style="max-width: 900px; display: flex; flex-direction: column; align-items: center; justify-content: space-evenly; height: 75vh;">
		<img src="rbf.png" style="max-width: 83%; margin-top: -25px"  />
			<div class="main-card" style="margin-top: -35px; display: flex; flex-direction: column; justify-content: space-evenly">
				<h1>Enable Auth Provider</h1>
				<p>Quickly and easily enable auth providers in Rancher!</p>
				<div class="auth-buttons">
					<a href="/login" class="btn btn-primary">Login</a>
					<a href="/register" class="btn btn-secondary">Register</a>
				</div>
			</div>
			</div>
		</div>
	</div>
	{/if}
</main>
