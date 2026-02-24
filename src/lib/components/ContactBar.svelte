<script lang="ts">
	let { email = 'studio@kalokyeung.com' } = $props();
</script>

<a href="mailto:{email}" class="contact-bar">
	{email}
</a>

<style>
	.contact-bar {
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-accent);
		color: var(--color-white);
		border-radius: var(--radius);
		padding: 5px var(--space-md) 8px;
		font-size: var(--text-base);
		font-weight: 700;
		line-height: var(--lh-tight);
		width: 100%;
		transition: opacity 0.15s;
	}

	.contact-bar:hover {
		opacity: 0.85;
	}
</style>
