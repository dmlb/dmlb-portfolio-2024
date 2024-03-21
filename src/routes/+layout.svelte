<script lang="ts">
	import { page } from '$app/stores';
	import { pageTitle, pageDescription } from '$lib/store';
	import pageData from '../data.json';
	import Header from '$lib/components/header.svelte';
	import ViewTransition from '$lib/components/view-transition.svelte';
	import '../app.css';

	const { bio } = pageData;
	const { name, title } = bio;

	$: pageClass = $page.url.pathname.length > 1 ? $page.url.pathname.replaceAll('/', '') : 'home';
</script>

<svelte:head>
	<title>{$pageTitle} | {name} {title}</title>
	<meta name="og:title" content="{$pageTitle} | {name} {title}">
	<meta name="description" content={$pageDescription}>
	<meta name="og:description" content={$pageDescription}>
	<meta property="og:site_name" content={name}>
	<meta property="og:locale" content="en_GB">
	<meta property="og:type" content="website">
	<meta property="og:image" content="images/logo-transparent.png">
	<meta property="og:image:alt" content="curly braces inside a lens">
</svelte:head>

<meta itemprop="name" content={name}>

<a class="skip-to-content-link" href="#main">
Skip to content
</a>
<div class={pageClass}>
	<ViewTransition />
	<Header />
	<main id="main">
		<h2 class="main-page-title">{$pageTitle}</h2>
		<slot />
	</main>
</div>
