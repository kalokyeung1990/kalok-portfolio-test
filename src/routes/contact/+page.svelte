<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>Contact — Kalok Yeung</title>
</svelte:head>

<article class="contact">
	<PageHeader title="Contact" />

	<section class="contact-main">
		<p>Available for new projects and collaborations.</p>
		<a href="mailto:studio@kalokyeung.com" class="contact-email">
			studio@kalokyeung.com
		</a>
	</section>

	<section class="contact-links">
		<h2>Links</h2>
		<nav>
			<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
			<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a>
			<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
		</nav>
	</section>
</article>

<style>
	.contact {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		max-width: 60ch;
	}

	.contact-main {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.contact-main p {
		font-size: var(--text-lg);
		line-height: 1.5;
		color: var(--color-text);
	}

	.contact-email {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: var(--color-accent);
		color: var(--color-white);
		border-radius: var(--radius);
		padding: var(--space-md) var(--space-lg);
		font-size: var(--text-base);
		font-weight: 700;
		width: fit-content;
		transition: opacity 0.15s;
	}

	.contact-email:hover {
		opacity: 0.85;
	}

	.contact-links h2 {
		font-size: var(--text-base);
		font-weight: 700;
		color: var(--color-text);
		margin-bottom: var(--space-md);
	}

	.contact-links nav {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.contact-links nav a {
		font-size: var(--text-base);
		font-weight: 700;
		color: var(--color-text-muted);
		transition: color 0.15s;
	}

	.contact-links nav a:hover {
		color: var(--color-text);
	}
</style>
