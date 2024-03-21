<script lang="ts">
	import DevLinks from '$lib/components/dev-links.svelte';
	import SkillIcon from '$lib/components/skill-icon.svelte';
	import { pageTitle, pageDescription } from '$lib/store';
	import pageData from '../../data.json';

	const { bio, skillIcons } = pageData;
	const { name, values } = bio;

	pageTitle.set(`About ${name}`);
	pageDescription.set('');
</script>

<div class="wrapper">
	<aside class="sidebar">
		<div class="sidebar-inner">
			<article>
				<h3 class="quick-heading">Quick Info</h3>
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
					<dd><DevLinks direction="2row" justify="center" /></dd>
				</dl>
			</article>
			{#if values}
				<article>
					<h3 class="subtitle">Values</h3>
					<ul class="values-list">
						{#each values as value}
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
			<section>
				<h3 class="subtitle">Danielle's Skills & Tools</h3>
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

	h3 {
		padding-bottom: var(--spacer-s);
		border-bottom: 2px solid var(--clr-primary);
	}

	.bio {
		--pline-height: 1.75;
		--pblock-space: 3rem;
	}

	.sidebar-inner {
		padding: var(--spacer-m);
		border-radius: var(--radi);
	}

	.quick-heading {
		margin-top: unset;
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
			line-height: 1.2;
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

	@media (min-width: 960px) {
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

		.sidebar-inner {
			background-color: hsla(
				var(--clr-primary-hue),
				calc(var(--clr-primary-saturation) + 50%),
				calc(var(--clr-primary-lightness) - 60%),
				0.25
			);
		}
	}
</style>
