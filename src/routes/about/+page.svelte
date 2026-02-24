<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>About — Kalok Yeung</title>
</svelte:head>

<article class="about">
	<PageHeader title="About" />

	<section class="about-bio">
		<p>
			Kalok Yeung is a designer focused on creating playful, functional digital
			experiences for a better internet. Based in London, working globally.
		</p>
	</section>

	<section class="about-section">
		<h2>Services</h2>
		<ul>
			<li>Brand Identity</li>
			<li>Web Design</li>
			<li>Art Direction</li>
			<li>UI/UX Design</li>
			<li>Creative Direction</li>
		</ul>
	</section>

	<section class="about-section">
		<h2>Selected Clients</h2>
		<ul>
			<li>i-D Magazine</li>
			<li>Micaiah Carter</li>
			<li>Arturistic</li>
		</ul>
	</section>
</article>

<style>
	.about {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		max-width: 60ch;
	}

	.about-bio p {
		font-size: var(--text-lg);
		line-height: 1.5;
		color: var(--color-text);
	}

	.about-section h2 {
		font-size: var(--text-base);
		font-weight: 700;
		color: var(--color-text);
		margin-bottom: var(--space-md);
	}

	.about-section ul {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.about-section li {
		font-size: var(--text-base);
		color: var(--color-text-muted);
		font-weight: 700;
	}
</style>
