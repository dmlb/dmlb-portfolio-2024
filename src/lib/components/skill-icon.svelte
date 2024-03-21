<script lang="ts">
	export let icon: string = '';
	export let size: number = 32;
	export let loading: 'lazy' | 'eager' = 'lazy';

	const imageIcon = `/images/icons/${icon}.svg`;
	const iconAlt = icon.replaceAll('-', ' ');
</script>

{#if icon}
	<div class="skill-icon" data-tooltip={iconAlt}>
		<meta itemprop="knowsAbout" content={iconAlt} >
		<img
			class="skill-icon__img"
			{loading}
			height={size}
			width={size}
			src={imageIcon}
			alt={iconAlt}
		/>
	</div>
{/if}

<style>
	.skill-icon__img {
		filter: invert(77%) sepia(7%) saturate(3383%) hue-rotate(26deg) brightness(82%) contrast(92%);
	}
</style>
