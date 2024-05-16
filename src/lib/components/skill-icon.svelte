<script lang="ts">
	/**
	 * component for svg icon display (tech brand/logo icons)
	*/
	/** component options */
	export let icon: string = '';
	export let size: number = 32;
	export let loading: 'lazy' | 'eager' = 'lazy';

	/** derived image src path */
	const imageIcon = `/images/icons/${icon}.svg`;
	/** derived image alt from file name */
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
	/* filter for svg icon colour while img element */
	.skill-icon__img {
		filter: invert(77%) sepia(7%) saturate(3383%) hue-rotate(26deg) brightness(82%) contrast(92%);
	}

	:global([data-mode="light"]) .skill-icon__img {
		filter: invert(22%) sepia(21%) saturate(1373%) hue-rotate(29deg) brightness(99%) contrast(86%);
	}
</style>
