<script lang="ts">
	import ProfileCard from './ProfileCard.svelte';
	import ProjectList from './ProjectList.svelte';
	import ContactBar from './ContactBar.svelte';
	import type { Project } from '$lib/types';

	let { projects, activeSlug = '' }: { projects: Project[]; activeSlug?: string } = $props();
</script>

<aside class="sidebar">
	<div class="sidebar-inner">
		<ProfileCard />
		<ProjectList {projects} {activeSlug} />
		<ContactBar />
	</div>
</aside>

<style>
	.sidebar {
		width: var(--sidebar-width);
		flex-shrink: 0;
		position: sticky;
		top: var(--space-md);
		align-self: flex-start;
		height: fit-content;
	}

	.sidebar-inner {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	@media (max-width: 768px) {
		.sidebar {
			width: 100%;
			position: relative;
			top: 0;
		}
	}
</style>
