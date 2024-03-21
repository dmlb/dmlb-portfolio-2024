<script lang="ts">
	import { fade } from 'svelte/transition';

	export let title: string;
	export let name: string;
	export let isOpen: boolean = false;
</script>

<!-- name of group of mutually-exclusive for accordion behaviour -->
<details bind:open={isOpen} {name}>
	<summary>{title}</summary>

	{#if isOpen}
		<div transition:fade class="details__content">
			<slot />
		</div>
	{/if}
</details>

<style>
	details {
		border: 1px solid var(--clr-primary);
		padding: var(--spacer);
		border-radius: var(--radi);
		margin-bottom: var(--spacer);
	}

	summary {
		font-size: var(--size-h3);
		padding: var(--spacer-s);
		border-bottom: 2px solid transparent;
		cursor: pointer;
	}

	details[open] summary {
		border-color: var(--clr-secondary);
	}

	.details__content {
		padding: var(--spacer-l) var(--spacer-m) var(--spacer);
	}
</style>
