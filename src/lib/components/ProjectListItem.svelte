<script lang="ts">
	let { title, slug, active = false } = $props();
</script>

<a href="/work/{slug}" class="project-item" class:active>
	<span class="dot"></span>
	<span class="title">{title}</span>
</a>

<style>
	.project-item {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.dot {
		width: 8px;
		height: 9px;
		border-radius: 50%;
		background: var(--color-text-muted);
		flex-shrink: 0;
	}

	.active .dot {
		background: var(--color-accent);
	}

	.title {
		font-size: var(--text-base);
		font-weight: 700;
		line-height: var(--lh-tight);
		color: var(--color-text-muted);
		transition: color 0.15s;
	}

	.active .title {
		color: var(--color-text);
	}

	.project-item:hover .title {
		color: var(--color-text);
	}
</style>
