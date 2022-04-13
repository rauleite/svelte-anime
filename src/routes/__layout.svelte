<script lang="ts">
	import '../app.css';
	import Logo from '../lib/Logo.svelte';
	// import theme from '$lib/store/theme';
	// theme.setTheme('night');
</script>

<svelte:head>
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

<!-- duration-500 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent" -->
<!-- <div -->
<!-- 	class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors  -->
<!--   duration-500 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent" -->
<!-- > -->
<div>
	<div class="relative flex items-center">
		<a href="/">
			<Logo />
		</a>
	</div>
</div>
<!-- div test  -->
<!-- <div class="supports-backdrop-blur " /> -->
<!-- <div class="backdrop-blur " /> -->
<slot />
