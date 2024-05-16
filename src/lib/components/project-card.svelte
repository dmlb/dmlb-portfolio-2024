<script lang="ts">
	/**
	 * card component for project information
	*/
	import TechStack from './tech-stack.svelte';
	import type { IProject } from '$lib/models';

	export let project: IProject;
</script>

{#if project}
	<article data-testid="scmp-project-card" class="card card--translucent card--bordered">
		<a aria-label="{project.title} {project.type}" class="card__link" href={project.link}>
			<div class={`project-type ${project.type}`}><span>{project.type}</span></div>
			<h3 class="card__header">{project.title}</h3>
			<TechStack techStack={project.techStack} />
		</a>
	</article>
{/if}

<style>
	.project-type {
		position: relative;
		top: calc(var(--spacer-s) * -1);
		padding: var(--spacer-s) 0;
		color: var(--clr-accent);
		font-size: var(--size-h5);
		font-weight: var(--weight-light);
		letter-spacing: var(--letter-space-m);
		text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
		text-transform: uppercase;
	}
</style>
