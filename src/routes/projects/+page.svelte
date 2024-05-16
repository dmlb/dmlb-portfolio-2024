<script lang="ts">
	import { onDestroy } from 'svelte';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	import { page } from '$app/stores';
	import ProjectCard from '$lib/components/project-card.svelte';
	import type { IPortolioData, ProjectType } from '$lib/models';
	import { createProjectFilterStore, handleProjectFilter } from '$lib/stores';
	import Accordion from '$lib/components/accordion.svelte';


	const { codeSamples } = $page.data.portfolio as IPortolioData;

	// radio group name
	const filterRadioName = "type-filter"
	// radio options
	const projectTypeList: ProjectType[] = [
		'design system',
		'web application',
		'website',
		'code snippet'
	];

	const projectStore = createProjectFilterStore(codeSamples);
	const unsubscribe = projectStore.subscribe((model) => handleProjectFilter(model));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<form class="projects-form" aria-label="Filter Projects">
	<Accordion isOpen={true} title="Filter Projects">

		<div class="form__input-wrapper">
			<label class="form__label" for="search-projects">Search</label>
			<input
				class="form__input"
				type="search"
				name="search-projects"
				id="search-projects"
				bind:value={$projectStore.search}
			/>
		</div>
		<fieldset class="form__radio-group">
			<legend>Filter by Project Type</legend>
	
			<div class="form__radio-wrapper">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve" height="1.2em" width="1.2em">
					<circle fill="none" stroke="var(--icon-stroke, AccentColor)" stroke-width="4" cx="50" cy="50" r="30"/>
					<circle style:opacity={$projectStore.typeFilter === '' ? 1 : 0} fill="var(--icon-fill, AccentColor)" cx="50" cy="50" r="20"/>
				</svg>
				<input
					class="form__radio"
					type="radio"
					name={filterRadioName}
					id="{filterRadioName}-a"
					value=""
					bind:group={$projectStore.typeFilter}
				/>
				<label for="type-filter-a" class="form__label">All</label>
			</div>
	
			{#each projectTypeList as projectType, i}
			<div class="form__radio-wrapper">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve" height="1.2em" width="1.2em">
					<circle fill="none" stroke="var(--icon-stroke, AccentColor)" stroke-width="4" cx="50" cy="50" r="30"/>
					<circle style:opacity={$projectStore.typeFilter === projectType ? 1 : 0} fill="var(--icon-fill, AccentColor)" cx="50" cy="50" r="20"/>
				</svg>
				<input
					class="form__radio"
					type="radio"
					name={filterRadioName}
					id="{filterRadioName}-{i}"
					value={projectType}
					bind:group={$projectStore.typeFilter}
				/>
				<label for="type-filter-{i}" class="form__label">
					{projectType}
				</label>
			</div>
			{/each}
		</fieldset>
	</Accordion>
</form>

{#if $projectStore.filtered}
	<ul class="projects-card-list">
		{#each $projectStore.filtered as project (project)}
			<li in:fade animate:flip={{ duration: 200 }}>
				<ProjectCard {project}></ProjectCard>
			</li>
		{/each}
	</ul>
{/if}

<style>
	.projects-form {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--spacer-m);
		margin-bottom: var(--spacer-l);

		& details {
			width: 100%;
		}
	}

	.form__radio-group {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacer);
		margin-block: var(--spacer);

		--icon-stroke: var(--clr-accent);
		--icon-fill: var(--clr-accent);
	}

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

	@container main (min-width: 640px) {
		.projects-card-list {
			--project-columns: 2;
		}
	}

	@container main (min-width: 960px) {
		.projects-card-list {
			--project-columns: 3;
		}
	}
</style>
