<script lang="ts">
	import { page } from '$app/stores';
	import Blockquote from '$lib/components/blockquote.svelte';
	import type { IPortolioData } from '$lib/models';

	const { endorsements, bio } = $page.data.portfolio as IPortolioData;
	endorsements.reverse();
</script>

{#if endorsements}
	<ul class="endorsements-list">
		{#each endorsements as { quote, person, position, company }, i}
			<li style="--animation-order:{i}" itemscope itemtype="https://schema.org/EndorseAction">
				<meta itemprop="endorsee" content={bio.name} />
				<meta itemprop="agent" content={person} />
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

	.endorsements-list li {
		animation: shift-fade-in 350ms ease-in-out both;
		animation-delay: calc(var(--animation-order) * 150ms);
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
