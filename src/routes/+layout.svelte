<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/header.svelte';
	import ViewTransition from '$lib/components/view-transition.svelte';

	export let data;
	const { bio } = $page.data.portfolio;

	$: pageClass = $page.url.pathname.length > 1 ? $page.url.pathname.replaceAll('/', '') : 'home';
</script>

<svelte:head>
	<title>{$page.data.title} | {bio.name} {bio.title}</title>
	<meta name="og:title" content="{$page.data.title} | {bio.name} {bio.title}">
	<meta name="description" content={$page.data.description}>
	<meta name="og:description" content={$page.data.description}>
	<meta property="og:site_name" content={bio.name}>
</svelte:head>

<meta itemprop="name" content={bio.name}>

<a class="skip-to-content-link" href="#main">
Skip to content
</a>
<div class={pageClass}>
	<ViewTransition />
	<Header />
	<main id="main">
		<h2 class="main-page-title">{$page.data.title}</h2>
		<slot />
	</main>
</div>
