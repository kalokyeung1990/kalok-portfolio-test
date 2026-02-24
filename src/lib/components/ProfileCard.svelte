<script lang="ts">
	let { expanded = false } = $props();
	let isExpanded = $state(false);

	$effect(() => {
		isExpanded = expanded;
	});
</script>

<div class="profile-card">
	<div class="profile-header">
		<p class="profile-name">Kalok Yeung</p>
		<button class="profile-toggle" onclick={() => isExpanded = !isExpanded}>
			{isExpanded ? '−' : '+'}
		</button>
	</div>
	<p class="profile-tagline">
		Designing playful, functional digital experiences for a better internet
	</p>
	{#if isExpanded}
		<nav class="profile-nav">
			<a href="/work">Work</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</nav>
	{/if}
</div>

<style>
	.profile-card {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: var(--space-md);
	}

	.profile-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: var(--space-xs);
	}

	.profile-name {
		font-size: var(--text-base);
		font-weight: 700;
		line-height: normal;
		color: var(--color-text);
	}

	.profile-toggle {
		font-size: var(--text-sm);
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-text);
		padding: 0;
		line-height: normal;
	}

	.profile-tagline {
		font-size: var(--text-base);
		font-weight: 700;
		line-height: var(--lh-normal);
		color: var(--color-text-muted);
		margin-top: var(--space-xs);
	}

	.profile-nav {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		margin-top: var(--space-md);
	}

	.profile-nav a {
		font-size: var(--text-base);
		font-weight: 700;
		color: var(--color-text-muted);
		transition: color 0.15s;
	}

	.profile-nav a:hover {
		color: var(--color-text);
	}
</style>
