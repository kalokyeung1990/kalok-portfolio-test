<script lang="ts">
	let { title, slug, imageUrl = '' }: { title: string; slug: string; imageUrl?: string } = $props();
</script>

<a href="/work/{slug}" class="project-card">
	{#if imageUrl}
		<img src={imageUrl} alt={title} loading="lazy" />
	{:else}
		<div class="placeholder">
			<span>{title}</span>
		</div>
	{/if}
</a>

<style>
	.project-card {
		display: block;
		width: 100%;
		border-radius: var(--radius);
		overflow: hidden;
		aspect-ratio: 824 / 1020;
		position: relative;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.placeholder {
		width: 100%;
		height: 100%;
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.placeholder span {
		font-size: var(--text-xl);
		font-weight: 700;
		color: var(--color-text-muted);
	}
</style>
