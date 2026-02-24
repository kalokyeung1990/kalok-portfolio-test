<script lang="ts">
	let { title } = $props();
</script>

<header class="page-header">
	<h1>{title}</h1>
</header>

<style>
	.page-header {
		padding: var(--space-xl) 0 var(--space-lg);
	}

	h1 {
		font-size: var(--text-xl);
		font-weight: 700;
		line-height: 1.2;
		color: var(--color-text);
	}
</style>
