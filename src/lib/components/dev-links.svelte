<script lang="ts">
	import pageData from '../../data.json';
	import SocialSvg from './social-svg.svelte';
	const { profSocials, bio } = pageData;
	const { hideResume, resumePdfUrl } = bio;

	export let socialsOnly: boolean = false;
	export let direction: 'row' | 'column' | '2row' = 'row';
	export let justify: 'center' | '' = '';
</script>

{#if profSocials || !hideResume}
	<ul class="dev-links dev-links--{direction}  dev-links--{justify}">
		{#if !hideResume && !socialsOnly}
			<li class="resume-link">
				<a class="button button--large button--accent" href={resumePdfUrl}>Download Resume</a>
			</li>
		{/if}

		{#each profSocials as { site, link }}
			<li>
				<a class="button button--icon button--accent" href={link}>
					<SocialSvg socialName={site} iconSize={32} />
					<span class="sr-only">{site}</span>
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
	.dev-links {
		margin: unset;
		padding: unset;
		list-style: none;
		display: flex;
		gap: var(--spacer);
		align-items: center;
	}

	.dev-links--center {
		justify-content: center;

		& .resume-link {
			justify-content: center;
		}
	}

	.dev-links--column {
		flex-direction: column;
	}

	.dev-links--2row {
		flex-wrap: wrap;

		& .resume-link {
			flex: 0 0 100%;
			display: flex;
		}
	}
</style>
