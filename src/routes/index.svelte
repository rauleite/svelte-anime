<script>
	// import SvgIcon from '$lib/AvatarSvg.svelte';
	import SvgAvatar from '$lib/Avatar2Svg.svelte';
	let faceStyle = {
		// mouth: { fill: '#00f' },
		// hair: { fill: '#f00' },
		// contour: { fill: '#0f0' }
	};
</script>

<h1 class="text-lg dark:text-slate-400">Text Lg</h1>
<h1 class="text-slate-700 dark:text-slate-400">Dark Slate 400</h1>
<h1 class="text-slate-700 ">Normal Slate 700</h1>
<h1 class="font-semibold dark:text-slate-400">Font Semibold</h1>
<h1 class="font-extrabold dark:text-slate-400">Font Semibold</h1>
<h1 class="dark:text-sky-400 leading-10">Leading 10</h1>
<h1 class="inline-block">Leading 10</h1>

<!-- <h1 class="prose">Prose</h1> -->
<!-- <h1 class="text">Raul</h1> -->
<!-- <SvgIcon {...faceStyle} /> -->
<SvgAvatar />

<style>
	/* :global(html) { */
	/* 	margin: 0; */
	/* 	padding: 0; */
	/* 	box-sizing: border-box; */
	/* } */

	/* it works */
	/* :global(.face__mouth) { */
	/* fill: #0f0; */
	/* } */
</style>
