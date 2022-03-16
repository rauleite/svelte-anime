<script>
	import SvgIcon from '$lib/AvatarSvg.svelte';
	let faceStyle = {
		// mouth: { fill: '#00f' },
		// hair: { fill: '#f00' },
		// contour: { fill: '#0f0' }
	};
</script>

<h1>Raul</h1>
<SvgIcon {...faceStyle} />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	/* it works */
	:global(.face__mouth) {
		/* fill: #0f0; */
	}
</style>
