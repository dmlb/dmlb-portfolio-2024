<script lang="ts">
	/**
	 * blockquote component
	 */
	export let quote: string;
	export let person: string;
	export let position: string;
	export let company: string;
</script>

<blockquote data-testid="scmp-blockquote">
	{quote}
	<cite>
		<span class="name">{person}</span>
		<span class="details">
			<span class="position">{position}</span>
			<span class="company">{company}</span>
		</span>
	</cite>
</blockquote>

<style>
	blockquote {
		padding: var(--spacer-s) var(--spacer-m);
		max-width: 60ch;
		position: relative;
		line-height: 1.5;
		font-size: var(--size-h6);
	}

	blockquote::before {
		content: '';
		display: block;
		width: 6px;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: var(--clr-accent);
		box-shadow: -3px 3px 0 1px var(--clr-primary);
	}

	blockquote cite {
		display: block;
		margin: var(--spacer) 0;
	}

	blockquote cite .details {
		display: block;
		font-size: var(--size-micro);
		color: var(--clr-gray);
		font-style: normal;
	}

	blockquote cite .name {
		font-size: var(--size-small);
	}

	blockquote cite .position {
		text-transform: uppercase;
		letter-spacing: var(--letter-space-m);
	}

	blockquote cite .company {
		display: block;
	}
</style>
