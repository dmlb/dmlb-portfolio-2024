<script lang="ts">
	import SkillIcon from './skill-icon.svelte';

	export let techStack: string[] = [];
	export let iconSize: number = 32;
</script>

{#if techStack}
	<ul class="tech-stack-list">
		{#each techStack as icon}
			<li><SkillIcon size={iconSize} {icon} /></li>
		{/each}
	</ul>
{/if}

<style>
	.tech-stack-list {
		margin: var(--spacer) 0;
		padding: unset;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacer);
	}
</style>
