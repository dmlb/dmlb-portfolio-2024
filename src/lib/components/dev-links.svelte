<script lang="ts">
	/**
	 * component for resume and social media links
	*/
	import pageData from '../../data.json';
	import SocialSvg from './social-svg.svelte';
	const { profSocials, bio } = pageData;
	const { hideResume, resumePdfUrl } = bio;

	/** display options */
	export let socialsOnly: boolean = false;
</script>

{#if profSocials || !hideResume}
	<ul data-testid="scmp-dev-links" class="dev-links">
		{#if !hideResume && !socialsOnly}
			<li class="resume-link">
				<a class="button button--large button--accent" href={resumePdfUrl}>Download Résumé</a>
			</li>
		{/if}

		{#each profSocials as { website, link, alt }}
			<li>
				<a class="button button--icon button--accent" href={link}>
					<SocialSvg socialName={website} iconSize={32} />
					<span class="sr-only">{alt}</span>
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

	@container (max-width: 640px) {
		.dev-links {
			flex-wrap: wrap;
			justify-content: center;
		}
	}
</style>
