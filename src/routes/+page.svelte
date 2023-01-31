<script lang="ts">
	import type {PageData} from './$types';
	export let data: PageData;
	import OpenLdap from './ldap/+page.svelte';
</script>

<main>
	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>

		<form action="/logout" method="POST">
			<button type="submit" class="btn btn-primary">Logout</button>
		</form>

		<OpenLdap />
	{:else}
		<h1>Rancher Enable Auth Provider</h1>
		<p>Quickly and easily enable auth providers in Rancher!</p>
		<div class="auth-buttons">
			<a href="/login" class="btn btn-primary">Login</a>
			<a href="/register" class="btn btn-secondary">Register</a>
		</div>
	{/if}
</main>
