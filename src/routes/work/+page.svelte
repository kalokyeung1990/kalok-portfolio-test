<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { placeholderProjects } from '$lib/sanity';

	const projects = placeholderProjects;
</script>

<svelte:head>
	<title>Work — Kalok Yeung</title>
</svelte:head>

<PageHeader title="Work" />

<section class="work-grid">
	{#each projects as project}
		<a href="/work/{project.slug}" class="work-item">
			<div class="work-thumbnail">
				<span class="work-placeholder-text">{project.title}</span>
			</div>
			<div class="work-info">
				<h2>{project.title}</h2>
				<p>{project.description}</p>
				<span class="work-year">{project.year}</span>
			</div>
		</a>
	{/each}
</section>

<style>
	.work-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-md);
	}

	.work-item {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.work-thumbnail {
		aspect-ratio: 4 / 3;
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.work-placeholder-text {
		font-size: var(--text-lg);
		font-weight: 700;
		color: var(--color-text-muted);
	}

	.work-info {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.work-info h2 {
		font-size: var(--text-base);
		font-weight: 700;
		color: var(--color-text);
	}

	.work-info p {
		font-size: var(--text-base);
		color: var(--color-text-muted);
		line-height: var(--lh-normal);
	}

	.work-year {
		font-size: var(--text-sm);
		color: var(--color-text-muted);
	}

	@media (max-width: 768px) {
		.work-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
