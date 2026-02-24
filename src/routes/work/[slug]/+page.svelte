<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { placeholderProjects } from '$lib/sanity';
	import { page } from '$app/state';

	let project = $derived(
		placeholderProjects.find((p) => p.slug === page.params.slug) ?? placeholderProjects[0]
	);
</script>

<svelte:head>
	<title>{project.title} — Kalok Yeung</title>
</svelte:head>

<article class="project-detail">
	<PageHeader title={project.title} />

	<div class="project-meta">
		<span class="project-year">{project.year}</span>
		<div class="project-tags">
			{#each project.tags as tag}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</div>

	<p class="project-description">{project.description}</p>

	<div class="project-gallery">
		{#each { length: 3 } as _, i}
			<div class="gallery-image">
				<span class="gallery-placeholder">{project.title} — Image {i + 1}</span>
			</div>
		{/each}
	</div>
</article>

<style>
	.project-detail {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.project-meta {
		display: flex;
		align-items: center;
		gap: var(--space-md);
	}

	.project-year {
		font-size: var(--text-base);
		font-weight: 700;
		color: var(--color-text-muted);
	}

	.project-tags {
		display: flex;
		gap: var(--space-sm);
	}

	.tag {
		font-size: var(--text-sm);
		font-weight: 700;
		color: var(--color-text-muted);
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: var(--space-xs) var(--space-sm);
	}

	.project-description {
		font-size: var(--text-base);
		line-height: var(--lh-normal);
		color: var(--color-text);
		max-width: 60ch;
	}

	.project-gallery {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.gallery-image {
		width: 100%;
		aspect-ratio: 824 / 1020;
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.gallery-placeholder {
		font-size: var(--text-lg);
		font-weight: 700;
		color: var(--color-text-muted);
	}
</style>
