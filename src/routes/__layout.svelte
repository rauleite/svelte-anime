<script lang="ts">
	import { onMount } from 'svelte';
	import { browser, dev } from '$app/env';
	// import '../app.css';
	import Logo from '$lib/Logo.svelte';

	let ReloadPrompt;
	onMount(async () => {
		!dev &&
			browser &&
			(ReloadPrompt = (await import('$lib/components/ReloadPrompt.svelte'))
				.default);
	});
</script>

<svelte:head>
	{#if !dev && browser}
		<link rel="manifest" href="/_app/manifest.webmanifest" />
	{/if}
	<script lang="ts">
		/**
		 *  This part must be disposed here, to be on top (head) of all pages
		 *  and so avoid the flickering theme on reload
		 */
		enum themes {
			NIGHT = 'night',
			LIGHT = 'light',
		}

		/**
		 * Sets theme attribute in html tag
		 */
		let setThemeAttribute = (theme: themes) => {
			document.documentElement.setAttribute('data-theme', theme);
		};

		let isSystemDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;

		const systemTheme: themes = isSystemDark ? themes.NIGHT : themes.LIGHT;

		const defaultTheme: themes =
			(localStorage.getItem('theme') as themes) ?? systemTheme;

		if (defaultTheme === themes.NIGHT) {
			setThemeAttribute(themes.NIGHT);
		} else if (defaultTheme === themes.LIGHT) {
			setThemeAttribute(themes.LIGHT);
		}
	</script>
</svelte:head>

<div>
	<div class="relative flex items-center">
		<a href="/">
			<Logo />
		</a>
	</div>
</div>
<slot />

{#if ReloadPrompt}
	<svelte:component this={ReloadPrompt} />
{/if}

<!-- <style type="text/scss" global> -->
<style lang="scss" global>
	@import '../../static/css/app';
</style>
