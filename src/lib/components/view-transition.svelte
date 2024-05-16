<script lang="ts">
	import { onNavigate } from '$app/navigation';

	/**
	 * view transitions API hook for route animations
	*/
	onNavigate((navigation) => {
		// @ts-expect-error new browser API
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-expect-error new browser API
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>
