<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
	import OpenLdap from "./ldap/+page.svelte";
	import GitHub from "./github/+page.svelte";
</script>

<main>
	{#if data.session}
		<h1>Welcome, {data.session.user.email}</h1>

		<form action="/logout" method="POST">
			<button type="submit" class="btn btn-primary">Logout</button>
		</form>

		<div class="container">
			<OpenLdap />
			<GitHub />
		</div>
	{:else}
		<div class="container">
			<div class="main-card">
				<h1>Rancher Enable Auth Provider</h1>
				<p>Quickly and easily enable auth providers in Rancher!</p>
				<div class="auth-buttons">
					<a href="/login" class="btn btn-primary">Login</a>
					<a href="/register" class="btn btn-secondary">Register</a>
				</div>
			</div>
		</div>
	{/if}
</main>
