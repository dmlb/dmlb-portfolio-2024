<script lang="ts">
	import Blockquote from '$lib/components/blockquote.svelte';
	import { pageTitle, pageDescription } from '$lib/store';
	import pageData from '../../data.json';

	pageTitle.set('Endorsements');
	pageDescription.set('');

	const { endorsements, bio } = pageData;
	endorsements.reverse();
</script>

{#if endorsements}
	<ul class="endorsements-list">
		{#each endorsements as { quote, person, position, company } (person)}
			<li itemscope itemtype="https://schema.org/EndorseAction">
				<meta itemprop="endorsee" content={bio.name}>
				<meta itemprop="agent" content={person}>
				<Blockquote {quote} {person} {position} {company} />
			</li>
		{/each}
	</ul>
{/if}

<style>
	.endorsements-list {
		width: 100%;
		list-style: none;
		margin: 0;
		padding: 0;

		display: flex;
		flex-direction: column;
		gap: var(--spacer-l);
	}

	.endorsements-list li:nth-child(even) {
		align-self: flex-end;

		& blockquote {
			text-align: right;

			&::before {
				right: 0;
				left: unset;
			}
		}
	}
</style>
