<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { placeholderProjects } from '$lib/sanity';

	const projects = placeholderProjects;

	// Duplicate the list for seamless infinite scroll
	// We render 3 copies: when the user scrolls past the middle set,
	// we silently reset scroll position back to the first copy.
	let scrollContainer: HTMLElement;

	function handleScroll() {
		if (!scrollContainer) return;
		const scrollHeight = scrollContainer.scrollHeight;
		const third = scrollHeight / 3;

		if (scrollContainer.scrollTop >= third * 2) {
			scrollContainer.scrollTop -= third;
		} else if (scrollContainer.scrollTop <= 0) {
			scrollContainer.scrollTop += third;
		}
	}
</script>

<svelte:head>
	<title>Kalok Yeung — Studio</title>
</svelte:head>

<section
	class="home"
	bind:this={scrollContainer}
	onscroll={handleScroll}
>
	{#each [0, 1, 2] as _set}
		{#each projects as project}
			<ProjectCard
				title={project.title}
				slug={project.slug}
				imageUrl={project.thumbnailUrl}
			/>
		{/each}
	{/each}
</section>

<style>
	.home {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		height: 100vh;
		overflow-y: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	.home::-webkit-scrollbar {
		display: none;
	}
</style>
