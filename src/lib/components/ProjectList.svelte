<script lang="ts">
	import ProjectListItem from './ProjectListItem.svelte';
	import type { Project } from '$lib/types';

	let { projects, activeSlug = '' }: { projects: Project[]; activeSlug?: string } = $props();
</script>

<div class="project-list">
	{#each projects as project}
		<ProjectListItem
			title={project.title}
			slug={project.slug}
			active={project.slug === activeSlug}
		/>
	{/each}
</div>

<style>
	.project-list {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: var(--space-md);
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}
</style>
