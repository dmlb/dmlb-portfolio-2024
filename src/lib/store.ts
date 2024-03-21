import { writable } from 'svelte/store';

const createTitle = () => {
	const { subscribe, set } = writable('Welcome');

	return {
		subscribe,
		set: (value: string) => {
			set(value);
		},
		clear: () => {
			set('Welcome');
		}
	};
};

export const pageTitle = createTitle();

const createDescription = () => {
	const { subscribe, set } = writable('Danielle Bastien Front-End Web Developer • Accessibility Technical Lead • Calgary, Alberta, Canada');

	return {
		subscribe,
		set: (value: string) => {
			set(value);
		},
		clear: () => {
			set(
				'Danielle Bastien Front-End Web Developer • Accessibility Technical Lead • Calgary, Alberta, Canada'
			);
		}
	};
};

export const pageDescription = createDescription();
