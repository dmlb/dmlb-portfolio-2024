<script lang="ts">
	import { page } from '$app/stores';
	import DevLinks from '$lib/components/dev-links.svelte';
	import SkillIcon from '$lib/components/skill-icon.svelte';
	import type { IPortolioData } from '$lib/models';

	const { bio, skillIcons } = $page.data.portfolio as IPortolioData;
</script>

<div class="wrapper">
	<aside class="sidebar">
		<div class="sidebar-inner">
			<article aria-labelledby="dQuick" class="card card--translucent">
				<h3 id="dQuick" class="card__header">Quick Info</h3>
				<dl class="quick-list">
					<dt>Pronouns</dt>
					<dd>{bio.pronouns}</dd>

					<dt>Location</dt>
					<dd>{bio.location}</dd>

					<dt>Started Coding</dt>
					<dd>{bio.startYear}</dd>

					<dt>Started Working</dt>
					<dd>{bio.professionalStartYear}</dd>

					<dt>Currently</dt>
					<dd>{@html bio.oneliner}</dd>

					<dt>Contact</dt>
					<dd><DevLinks /></dd>
				</dl>
			</article>
			{#if bio.values}
				<article aria-labelledby="dValues" class="card card--translucent">
					<h3 id="dValues" class="card__header">Values</h3>
					<ul class="values-list">
						{#each bio.values as value}
							<li>{value}</li>
						{/each}
					</ul>
				</article>
			{/if}
		</div>
	</aside>
	<div class="about-content">
		<div class="bio">{@html bio.workbio}</div>

		<p><a class="button" href="/cv">Read Danielle's Curriculum Vitae</a></p>

		{#if skillIcons}
			<section aria-labelledby="dSkillTool">
				<h3 id="dSkillTool" class="subtitle">Danielle's Skills & Tools</h3>
				<ul class="skill-list">
					{#each skillIcons as icon}
						<li><SkillIcon size={48} {icon} /></li>
					{/each}
				</ul>
			</section>
		{/if}
	</div>
</div>

<style>
	.wrapper,
	.sidebar {
		max-width: 100%;
	}

	.bio {
		--pline-height: 1.75;
		--pblock-space: 3rem;
	}

	.sidebar-inner {
		padding: var(--spacer-m);
		container-type: inline-size;
  		container-name: sidebar;
	}

	.quick-list {
		font-size: var(--size-body);

		& dt {
			display: block;
			font-weight: var(--weight-medium);
			letter-spacing: var(--letter-space-m);
			margin-bottom: var(--spacer-s);
		}

		& dd {
			line-height: 1.5;
			margin: 0 0 var(--spacer-m) 0;
		}
	}

	.skill-list {
		margin: unset;
		padding: unset;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacer-m);
	}

	@container main (min-width: 960px) {
		.wrapper {
			display: grid;
			grid-template-columns: 1fr 360px;
			grid-template-areas: 'info sidebar';
			gap: 4rem;
		}

		.sidebar {
			grid-area: sidebar;
		}

		.about-content {
			grid-area: info;
		}
	}

	
</style>
