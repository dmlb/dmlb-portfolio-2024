<script lang="ts">
	/**
	 * global site header, navigation
	*/
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import pageData from '../../data.json';
	import DevLinks from './dev-links.svelte';
	import SiteSettings from './site-settings.svelte';
	const { bio } = pageData;

	/** flag for broswer support of dialog element */
	let dialogSupported: boolean = false;
	/**
	 *  check for browser support of dialog element actions
	*/
	onMount(() => {
		dialogSupported = HTMLDialogElement.prototype.hasOwnProperty("showModal") || false
	});

	const paths = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about/' },
		{ name: 'CV', path: '/cv/' },
		{ name: 'Projects', path: '/projects/' },
		{ name: 'Endorsements', path: '/endorsements/' }
	];
</script>

<header data-testid="scmp-header">
	<div class="headline">
		<picture>
			<source srcset="/images/logo-dmlb.avif" type="image/avif" />
			<source srcset="/images/logo-dmlb.webp" type="image/webp" />
			<img height="75" width="75" src="/images/logo-dmlb.png" alt="curly braces inside a lens" />
		</picture>
		<h1>
			{bio.name}
			<span>{bio.title}</span>
		</h1>
	</div>
	<div class="socials">
		<DevLinks socialsOnly={true} />
	</div>

	{#if dialogSupported}
		<div class="site-settings">
			<SiteSettings></SiteSettings>
		</div>
	{/if}
	<nav>
		{#each paths as { name, path }}
			{@const active = $page.url.pathname === path ? 'page' : null}
			<a aria-current={active} href={path}>{name}</a>
		{/each}
	</nav>
</header>

<style>
	header {
		view-transition-name: header;
		width: 100vw;
		transition: background 100ms ease-in;
		padding: var(--spacer-m) var(--spacer) var(--spacer);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: var(--spacer);
		position: relative;
	}

	.site-settings {
		position: absolute;
		top: var(--spacer);
		right: var(--spacer);
	}

	.headline {
		display: flex;
		align-items: center;
		gap: var(--spacer-m);
		max-width: clamp(var(--container-s), 50vw, var(--container));
		transition: transform 200ms linear;
	}

	.socials {
		flex: 0 0 100%;
		display: flex;
		justify-content: center;
	}

	h1 {
		font-size: var(--size-h1);
		margin: unset;

		& span {
			display: block;
			font-weight: var(--weight-normal);
			margin: var(--spacer) 0;
			font-size: var(--size-h6);
			color: var(--clr-secondary);
		}
	}

	nav {
		max-width: clamp(var(--container-s), 100vw, var(--container));
		margin-inline: auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: var(--spacer-m) var(--spacer-l);

		& a {
			position: relative;
			font-weight: var(--weight-bold);

			&[aria-current='page'] {
				--link-clr: var(--clr-secondary);
				border-bottom-color: var(--clr-accent);
			}

			&[aria-current='page']::before {
				--size: 3px;
				content: '';
				position: absolute;
				top: calc(var(--size) * -1);
				width: 100%;
				height: 1px;
				border-top: var(--size) solid var(--clr-accent);
				view-transition-name: active-page;
			}
		}
	}

	:global([data-mode="light"]) .headline picture {
		filter: sepia(1) brightness(50%) contrast(200%);	
	}
</style>
