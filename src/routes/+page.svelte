<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { placeholderProjects } from '$lib/sanity';

	const projects = placeholderProjects;
</script>

<svelte:head>
	<title>Kalok Yeung — Studio</title>
</svelte:head>

<section class="home">
	{#each projects as project}
		<ProjectCard title={project.title} slug={project.slug} />
	{/each}
</section>

<style>
	.home {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}
</style>
