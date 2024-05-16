<script lang="ts">
	/**
	 * component button and dialog for site settings
	 */
	import { browser } from '$app/environment';
	import type { SiteFont, SiteMode } from '$lib/models';
	import {
		savedSiteSettingsStore,
		siteFontStore,
		siteModeStore,
		updateSiteSettings
	} from '$lib/stores/site-settings';
	import { onDestroy } from 'svelte';

	/** for svelte bind */
	let dialogEl: HTMLDialogElement;
	/** for current non-derived mode */
	let currentMode: SiteMode;
	/** for current range value */
	let rangeValue: number = 75;

	const handleRangeChange = (event: Event) => {
		const el = event.target as HTMLInputElement;	
		rangeValue = +el.value;
		document?.body?.style.setProperty('--user-reading-w', `${rangeValue}ch`)
	}

	const settingsUnsub = savedSiteSettingsStore.subscribe((model) => {
		// get the non-derived/transformed site mode for current value
		currentMode = model.mode;
	});

	/**
	 * set the data-mode attribute on the root element on changes
	 */
	const modeUnsub = siteModeStore.subscribe((model) => {
		if (!browser) return;
		document?.documentElement?.setAttribute('data-mode', model.toString());
	});

	/**
	 * set the data-font attribute on the root element on changes
	 */
	const fontUnsub = siteFontStore.subscribe((model) => {
		if (!browser) return;
		document?.documentElement?.setAttribute('data-font', model);
	});

	/**
	 * cleanup subscriptions
	 */
	onDestroy(() => {
		modeUnsub();
		fontUnsub();
		settingsUnsub();
	});

	/**
	 * setting options groups
	 */
	const modeOptions: SiteMode[] = ['system', 'light', 'dark'];
	const fontOptions: SiteFont[] = ['system', 'dyslexic'];
</script>
<button data-testid="scmp-settings-trigger" class="button button--secondary" on:click={() => dialogEl.showModal()} type="button"
	>Settings</button
>

<dialog data-testid="scmp-settings-dialog" aria-labelledby="settingsTitle" bind:this={dialogEl}>
	<h2 class="dialog__title" id="settingsTitle">Site Settings</h2>

	<button class="button dialog__close" on:click={() => dialogEl.close()} type="button"
		>X <span class="sr-only">Close</span></button
	>

	<form aria-labelledby="settingsTitle">
		<fieldset class="button-group">
			<legend class="option-heading">Theme Mode</legend>

			{#each modeOptions as mode (mode)}
				<div
					class="form__radio-wrapper button-group__button"
					class:selected={$savedSiteSettingsStore.mode === mode}
				>
					<input
						class="form__radio"
						type="radio"
						name="mode"
						id="mode-{mode}"
						value={mode}
						on:click={() => {
							updateSiteSettings($siteFontStore, mode);
						}}
					/>
					<label for="mode-{mode}" class="form__label font-label">{mode}</label>
				</div>
			{/each}
		</fieldset>

		<fieldset class="button-group">
			<legend class="option-heading">Theme Font</legend>

			{#each fontOptions as font (font)}
				<div
					class="form__radio-wrapper button-group__button"
					class:selected={$siteFontStore === font}
				>
					<input
						class="form__radio"
						type="radio"
						name="font"
						id="font-{font}"
						value={font}
						on:click={() => {
							updateSiteSettings(font, $savedSiteSettingsStore.mode);
						}}
					/>
					<label for="font-{font}" class="form__label font-label {font}">{font}</label>
				</div>
			{/each}
		</fieldset>

		<div class="form__range-wrapper">
			<label class="form__label option-heading" for="readingWidth">Reading Width</label>

			<input class="form__range" type="range" id="readingWidth" name="readingWidth" min="25" max="95" step="10" value={rangeValue} list="markers" on:change={(evt) => handleRangeChange(evt)} />

			<datalist id="markers">
				<option value="35"></option>
				<option value="45"></option>
				<option value="65"></option>
				<option value="75"></option>
			</datalist>
			<span class="form__range-output">
			<output for="readingWidth" id="readingWidth-value">{rangeValue}</output> Characters
		</span>
		</div>
	</form>
</dialog>

<style>
	.option-heading {
		margin: 0 0 var(--spacer) 0;
		display: block;
		width: 100%;
		font-size: var(--size-h3);
		font-weight: var(--weight-medium);
	}

	.button-group {
		display: flex;
		margin: var(--spacer) 0 var(--spacer-l);
	}

	button {
		font-family: inherit;
	}

	.button-group .button-group__button {
		text-transform: capitalize;
		height: 4rem;
		min-width: 5rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
		padding: var(--spacer);
		background: var(--clr-primary);
		border: 2px solid
			hsl(
				var(--clr-primary-hue),
				calc(var(--clr-primary-saturation) + 30%),
				var(--clr-primary-lightness)
			);
		border-radius: 0;
		color: var(--canvas-bg);
		font-size: var(--size-h5);
		transition: all 300ms ease-in-out;
		border-right-width: 0;
		cursor: pointer;

		&:hover,
		&:focus-visible {
			background: hsl(
				var(--clr-primary-hue),
				calc(var(--clr-primary-saturation) + 30%),
				var(--clr-primary-lightness)
			);
		}

		&:first-of-type {
			border-top-left-radius: var(--radi-m);
			border-bottom-left-radius: var(--radi-m);
		}

		&:last-of-type {
			border-top-right-radius: var(--radi-m);
			border-bottom-right-radius: var(--radi-m);
			border-right-width: 2px;
		}

		&.selected,
		&:disabled {
			cursor: not-allowed;
			background: hsl(
				var(--clr-primary-hue),
				calc(var(--clr-primary-saturation) + 10%),
				calc(var(--clr-primary-lightness) - 25%)
			);
		}
	}

	/* preview font selection on button */
	.font-label.system {
		font-family: var(--font-system);
	}

	.font-label.dyslexic {
		font-family: var(--font-dyslexic);
	}

	.form__range-wrapper {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--spacer-s);
	}
</style>
