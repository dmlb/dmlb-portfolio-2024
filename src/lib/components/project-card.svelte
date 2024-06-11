<script lang="ts">
	/**
	 * card component for project information
	 */
	import TechStack from './tech-stack.svelte';
	import type { IProject } from '$lib/models';

	export let project: IProject;
</script>

{#if project}
	<article aria-label={project.title} data-testid="scmp-project-card" class="card card--translucent card--bordered">
		<a class="card__link card__link--overlay" href={project.link}>
			<span class="sr-only">{project.title} {project.type}</span>
		</a>
		<div class={`project-type ${project.type}`}><span>{project.type}</span></div>
		<h3 class="card__header">{project.title}</h3>
		{#if project.description }
			<p class="card__content">{project.description}</p>
		{/if}
		<TechStack techStack={project.techStack} />
	</article>
{/if}

<style>
	.project-type {
		position: relative;
		display: inline-flex;
		top: calc(var(--spacer-s) * -1);
		padding: var(--spacer-s) 0;
		color: var(--clr-accent);
		font-size: var(--size-h4);
		font-weight: var(--weight-light);
		letter-spacing: var(--letter-space-m);
		text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
		text-transform: uppercase;
	}

	:global([data-mode="light"]) .project-type {
		background-color: var(--canvas-bg);
		padding: var(--spacer-s);
	}
</style>
