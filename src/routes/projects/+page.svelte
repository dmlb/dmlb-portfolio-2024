<script lang="ts">
	import { fade } from 'svelte/transition';

	import TechStack from '$lib/components/tech-stack.svelte';
	import { pageTitle, pageDescription } from '$lib/store';
	import pageData from '../../data.json';

	pageTitle.set('Projects');
	pageDescription.set('');

	const { codeSamples } = pageData;
</script>

{#if codeSamples}
	<ul class="projects-card-list">
		{#each codeSamples as { title, link, type, techStack }, i}
			{@const delayCalc = 250 * (i + 1)}
			{#if link && title}
				<li transition:fade={{ delay: delayCalc, duration: 200 }}>
					<article class="card card--translucent card--bordered">
						<a class="card__link" href={link}>
							<div class={`project-type ${type}`}><span>{type}</span></div>
							<h3 class="card__header">{title}</h3>
							<TechStack {techStack} />
						</a>
					</article>
				</li>
			{/if}
		{/each}
	</ul>
{/if}

<style>
	.projects-card-list {
		margin: unset;
		padding: 0 var(--spacer-l);
		list-style: none;
		max-width: 100%;
		display: grid;
		grid-template-columns: repeat(var(--project-columns, 1), 1fr);
		gap: var(--spacer-l);

		--card-width: 100%;
		& .card {
			height: 100%;
		}
	}

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

	@media (min-width: 640px) {
		.projects-card-list {
			--project-columns: 2;
		}
	}

	@media (min-width: 960px) {
		.projects-card-list {
			--project-columns: 3;
		}
	}
</style>
