import { browser } from "$app/environment";
import type { ISiteSettings, SiteFont, SiteMode } from "$lib/models";
import { derived, readable, writable } from "svelte/store";

/** key for local storage */
const SITE_LOCAL_STORE_KEY = 'dmlb-site-settings'
/** default site settings (system) */
const DEFAULT_SETTINGS: ISiteSettings = {
    mode: 'system',
    font: 'system'
}

/**
 * writable store for site settings
 */
export const savedSiteSettingsStore = writable<ISiteSettings>(DEFAULT_SETTINGS, (set) => {
    // n/a server side
    if (!browser) {
        return;
    }

    // access previously saved site settings values from local storage
    const savedSettings = localStorage.getItem(SITE_LOCAL_STORE_KEY)

    // exit null values
    if (!savedSettings) {
        return
    }

    // parse saved settings
    const parsedSavedSettings = JSON.parse(savedSettings) as ISiteSettings;

    // save to store
    if (parsedSavedSettings) {
        set(parsedSavedSettings)
        return;
    }
})

/**
 * readable store watching user pefers color scheme changes
 */
export const deviceModeQueryStore = readable(false, (set) => {
     // n/a server side
    if (!browser) {
        return;
    }

    // media query for system dark mode
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    // save to store
    set(darkModeQuery.matches)

    // watch for changes to the media query and save to store
    darkModeQuery.addEventListener('change', () => {
        set(darkModeQuery.matches)
    })
})

/**
 * update the site settings in the store and local storage
 * @param {SiteFont} font 
 * @param {SiteMode} mode 
 */
export const updateSiteSettings = (font: SiteFont, mode: SiteMode) => {
    const newSettings = { font, mode }
    savedSiteSettingsStore.set(newSettings)
    localStorage.setItem(SITE_LOCAL_STORE_KEY, JSON.stringify(newSettings))
}

/**
 * derived store for site mode from saved site settings and user prefers media query
 * values should be dark or light, determine which when system selected
 */
export const siteModeStore = derived<[typeof savedSiteSettingsStore, typeof deviceModeQueryStore], 'dark' | 'light'>([savedSiteSettingsStore, deviceModeQueryStore], ([siteSettings, deviceMode], set) => {
    // n/a server side, default theme is dark
    if (!browser) {
        set('dark')
        return;
    }

    // system selected: use the media query to set mode
    if (siteSettings.mode === 'system') {
        set(deviceMode ? 'dark' : 'light')
    } else {
        set(siteSettings.mode)
    }
})

/**
 * derived store for site font from saved site settings
 */
export const siteFontStore = derived<[typeof savedSiteSettingsStore], SiteFont>([savedSiteSettingsStore], ([siteSettings], set) => {
    // n/a server side, default theme is system
    if (!browser) {
        set('system')
        return;
    }

    set(siteSettings.font)
})
