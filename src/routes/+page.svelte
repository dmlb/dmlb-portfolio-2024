<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	import DevLinks from '$lib/components/dev-links.svelte';
	import SocialSvg from '$lib/components/social-svg.svelte';

	const { photography, bio, discord } = $page.data.portfolio;

	let load: boolean = false;
	// TODO: hook animation:end bg-image scale-down
	setTimeout(() => (load = true), 600);
</script>

<svelte:head>
	<link rel="preload" href="images/bg/black-swallowtail.jpg" as="image" type="image/jpeg" />
	<link rel="preload" href="images/bg/black-swallowtail.webp" as="image" type="image/webp" />
	<link rel="preload" href="images/bg/black-swallowtail.avif" as="image" type="image/avif" />
</svelte:head>

<div class="bg-image"></div>

<div class="card-wrapper">
	{#if load}
		<article transition:fade={{ delay: 350, duration: 200 }} class="card">
			<h3 class="card__header">Danielle's Work {bio.emojiliner}</h3>
			<p class="card__content">{bio.charlimit}</p>
			<div class="card__actions card__actions--center">
				<a class="button" href="/about">More about Danielle</a>
			</div>
			<div class="card__actions card__actions--center">
				<DevLinks />
			</div>
		</article>

		<article transition:fade={{ delay: 750, duration: 200 }} class="card">
			<h3 class="card__header">{discord.name}</h3>
			<div class="card__content">
				<picture>
					<source srcset="/images/a11y-tech-network-discord.avif" type="image/avif" />
					<source srcset="/images/a11y-tech-network-discord.webp" type="image/webp" />
				
				<img
					class="float-img"
					height="200"
					width="200"
					src="/images/a11y-tech-network-discord.png"
					alt={discord.alt}
				/>
			</picture>
			{@html discord.plug}
			</div>
			<div class="card__actions">
				<a class="button" href={discord.link}
					><SocialSvg iconSize={16} socialName="discord" /> Join {discord.name}</a
				>
			</div>
		</article>

		<article transition:fade={{ delay: 550, duration: 200 }} class="card">
			<h3 class="card__header">{photography.title}</h3>
			<p class="card__content">{photography.plug}</p>
			<div class="card__actions">
				<a class="button" href={photography.links.instagram}
					><SocialSvg iconSize={16} socialName="instagram" />Photography</a
				>
				<a class="button button--secondary" href={photography.links.book}>Bird Photos Book</a>
			</div>
		</article>

		<article transition:fade={{ delay: 750, duration: 200 }} class="card">
			<h3 class="card__header">Land Acknowledgement</h3>
			<p class="card__content">{bio.landAcknowledgement.location}</p>
			<p class="card__content">{bio.landAcknowledgement.people}</p>
		</article>
	{/if}
</div>

<style>
	:global(.home) {
		& header {
			background-color: hsla(
				var(--clr-black-hue),
				var(--clr-black-saturation),
				var(--clr-black-lightness),
				0.7
			);
		}

		& .main-page-title {
			text-align: center;
			font-size: var(--size-mega);
			letter-spacing: var(--letter-space-m);
			text-shadow: 2px 1px var(--clr-black);
		}
	}

	.bg-image {
		position: fixed;
		inset: 0;
		z-index: -1;
		height: 100vh;
		width: 100vw;
		background-size: cover;
		background-image: url('$lib/images/bg/black-swallowtail.jpg'); /*fallback*/
		background-image: image-set(
			url('$lib/images/bg/black-swallowtail.avif') type('image/avif'),
			url('$lib/images/bg/black-swallowtail.webp') type('image/webp'),
			url('$lib/images/bg/black-swallowtail.jpg') type('image/jpeg')
		);
		transform: scale(1.6);
		animation: 500ms cubic-bezier(0.4, 0, 1, 1) 200ms forwards scale-down;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			display: block;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.65);
			opacity: 0;
			animation: 600ms cubic-bezier(0.4, 0, 1, 1) 400ms 1 forwards fade;
		}
	}

	.card-wrapper .card {
		margin-inline: auto;
		margin-block: var(--spacer-l);
	}

	.float-img {
		border-radius: var(--radi);
		margin-inline-end: var(--spacer-m);
		float: left;
	}
</style>
