<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { placeholderProjects } from '$lib/sanity';
	import { page } from '$app/state';

	let { children } = $props();

	const projects = placeholderProjects;

	let activeSlug = $derived(
		page.params?.slug ?? ''
	);
</script>

<svelte:head>
	<title>Kalok Yeung — Studio</title>
</svelte:head>

<div class="layout">
	<Sidebar {projects} {activeSlug} />
	<main class="content">
		{@render children()}
	</main>
</div>

<style>
	.layout {
		display: flex;
		gap: var(--space-lg);
		max-width: 1440px;
		margin: 0 auto;
		padding: var(--space-md);
		min-height: 100vh;
	}

	.content {
		flex: 1;
		min-width: 0;
		max-width: var(--content-max);
	}

	@media (max-width: 768px) {
		.layout {
			flex-direction: column;
		}
	}
</style>
