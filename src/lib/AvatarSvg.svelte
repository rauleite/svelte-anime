<script lang="ts">
	import { onMount } from 'svelte';
	import { intersect } from '$lib/js/intersection';
	// import { existsListener } from '$lib/js/health';
	export let freckles = { fill: '#f39283' };
	export let eyebrow = { fill: '#644358d8' };
	export let eye = { fill: '#6f433cff' };
	export let mouth = { fill: '#ffffffff' };
	export let hair = { fill: '#644358ff' };
	export let hairFringe = { fill: hair.fill };
	export let contour = { fill: '#fbb99fff' };
	export let ear = { fill: contour.fill };

	let eyeBlink: boolean = false;
	let eyeElem: SVGRectElement;

	// afterUpdate(() => {
	// 	existsListener(document, 'visibilitychange');
	// });

	onMount(async () => {
		console.log('onMount');

		// let tabChanges = (event: Event) => {
		let tabChanges = () => {
			console.log('tab show', !document.hidden);
		};

		let observer = intersect(
			// (isIntersecting, { entries, observer }) => {
			(isIntersecting) => {
				if (isIntersecting) {
					return (eyeBlink = true);
				}
				eyeBlink = false;
			},
			{
				// track this attachListener, but only while has element intersection
				observerOptions: {
					//each 70% of element visible
					// default is 0 (very moment that the element appears)
					// 1 = only if element is full visible
					threshold: 0.7
				},
				attachListener: {
					element: document,
					name: 'visibilitychange',
					callback: tabChanges
				}
			}
		);

		observer.observe(eyeElem);
		return () => {
			console.log('unMount');
			observer.unobserve(eyeElem);
		};
	});

	let toStyle = (style: { fill: string }) =>
		Object.entries(style)
			.map(([param, value]) => `${param}:${value};`)
			.join('');

	let face = {
		freckles: toStyle(freckles),
		eyebrow: toStyle(eyebrow),
		eye: toStyle(eye),
		mouth: toStyle(mouth),
		hair: toStyle(hair),
		hairFringe: toStyle(hairFringe),
		contour: toStyle(contour),
		ear: toStyle(ear)
	};

	// 	let observer = new IntersectionObserver(
	// 		(entries, observer) => {
	// 			console.log('eye show', entries[0].isIntersecting);
	// 			if (entries[0].isIntersecting) {
	// 				eyeBlink = true;
	// 				// and attaches listener to see if tab changes
	// 				tabChanges();
	// 				document.addEventListener('visibilitychange', tabChanges);
	// 				return;
	// 			}

	// 			document.removeEventListener('visibilitychange', tabChanges);
	// 			eyeBlink = false;
	// 		},
	// 		{
	// 			threshold: 0.5
	// 		}
	// 	);
	// 	observer.observe(eyeElem);
	// 	return () => {
	// 		console.log('unMount');
	// 		observer.unobserve(eyeElem);
	// 	};
	// });

	// %s/\(style=\)[A-Za-z0-9"#\.:;-]*/\1{}
	// :%s/class=[A-Za-z0-9"_#\.:;-]*/
	// :%s/\(<g\)\sstyle=[A-Za-z0-9\{\}"_#\.:;-]*/\1
</script>

<div style="height: 1200px;" />
<svg viewBox="0 0 41.845 61.4" height="232.062" width="158.154" xmlns="http://www.w3.org/2000/svg">
	<g>
		<path
			style={face.hair}
			d="M88.273 25.385c-6.727-.012-12.223.626-16.454 6.309 0 0-3.524 1.273-5.34 2.337-1.816 1.064-4.867 3.51-4.33 7.522.537 4.012 1.858 17.117 1.858 17.117h2.34c-.037-2.85-.126-5.698-.146-8.547-.01-1.294-.2-2.604 0-3.883.08-.507.221-1.015.47-1.467.347-.63.88-1.38 1.618-1.383l11.08-.038 12.313-.022c.358 0 .73.177 1.059.433.347.27.645.627.823.951.25.452.392.96.471 1.467.2 1.28.01 2.588 0 3.882-.02 2.87-.11 5.738-.147 8.607h2.131s3.161-16.588.741-20.143c2.467-3.29 4.896-6.593 5.04-10.726-4.612-1.492-9.215-2.409-13.527-2.416z"
			transform="translate(-60.287 -24.907)"
		/>
		<g>
			<path
				style={face.ear}
				d="M66.171 63.781c0 1.871-.106 5.297-.106 5.297s-1.657.25-2.489.215c-1.778-.076-3.29-3.359-3.29-6.301 0-2.943 1.863-4.028 2.687-4.285 1.1-.344 3.24-.009 3.24-.009s-.041 3.604-.042 5.083z"
				transform="matrix(.993 0 0 .993 -59.863 -24.497)"
				stroke="none"
			/>
			<path
				style={face.ear}
				d="M94.073 63.76c0 1.87.106 5.296.106 5.296s1.657.25 2.49.215c1.777-.076 3.29-3.359 3.29-6.301 0-2.943-1.864-4.028-2.688-4.285-1.1-.344-3.24-.009-3.24-.009s.041 3.604.042 5.083z"
				transform="matrix(.993 0 0 .993 -59.863 -24.497)"
				stroke="none"
			/>
		</g>
		<path
			style={face.contour}
			d="M80.124 86.307c1.775-.005 5.531-3.189 8.004-5.187 2.06-2 4.375-3.927 5.576-6.524.534-1.155.52-2.5.606-3.77.076-1.122-.056-2.249-.084-3.374-.283-5.87-.02-12.116.024-17.495.01-1.313.204-2.642 0-3.94-.08-.514-.225-1.03-.477-1.49a3.312 3.312 0 0 0-.836-.965c-.334-.26-.712-.44-1.076-.44l-12.499.023-11.246.038c-.749.003-1.29.765-1.641 1.405-.253.458-.397.974-.478 1.489-.203 1.298-.01 2.627 0 3.94.17 6.223.168 11.771.024 17.496-.027 1.124-.16 2.251-.083 3.374.085 1.269.071 2.614.606 3.77 1.2 2.596 3.495 4.834 5.575 6.523 2.47 1.985 6.3 5.131 8.005 5.127z"
			transform="translate(-60.287 -24.907)"
		/>
		<path
			style={face.hairFringe}
			d="m66.969 42.418 26.042-.072c.445.166.762.41 1.008.578 0 0-14.1 13.523-27.05-.506z"
			transform="translate(-60.287 -24.907)"
		/>
		<path
			style={face.mouth}
			d="M74.183 72.014c-.204-.337.121-.61.121-.61s3.723.117 5.585.117 5.585-.116 5.585-.116.326.272.12.61c-1.744 2.874-2.42 5.107-5.705 5.18-3.285-.073-3.961-2.306-5.706-5.18z"
			transform="translate(-60.287 -24.907)"
		/>

		<g transform="translate(-60.109 -24.907)">
			<rect
				style={face.eye}
				width="3.307"
				height="4.941"
				x="71.896"
				y="57.993"
				ry="1.54"
				stroke="none"
				class:eyeBlink
				bind:this={eyeElem}
			/>
			<rect
				style={face.eye}
				width="3.307"
				height="4.941"
				x="84.689"
				y="57.993"
				ry="1.54"
				stroke="none"
				class:eyeBlink
				bind:this={eyeElem}
			/>
		</g>
		<g>
			<path
				style={face.eyebrow}
				d="m70.08 54.308.615 1.708s1.877-1.325 5.131 0l.504-2.303c-2.524-.355-4.62-.172-6.25.595z"
				transform="translate(-60.287 -24.907)"
			/>
			<path
				style={face.eyebrow}
				d="m89.826 54.308-.615 1.708s-1.878-1.325-5.131 0l-.504-2.303c2.524-.355 4.62-.172 6.25.595z"
				transform="translate(-60.287 -24.907)"
			/>
		</g>
		<g transform="translate(-60.287 -25.158)">
			<circle style={face.freckles} cx="89.532" cy="66.654" r="2.171" />
			<circle style={face.freckles} cx="70.187" cy="66.654" r="2.171" />
		</g>
	</g>
</svg>

<style type="css">
	:root {
		--blink-duration: 0.2s;
		--blink-timing-function: linear;
		--blink-delay: 0.6s;
		/* --blink-timing-function: steps(4, jump-both)  */
		/* --blink-animation-direction: alternate; */
		--blink-key-opacity-1: 1;
		--blink-key-opacity-2: 0.2;
		--blink-key-opacity-3: 1;
	}
	.eyeBlink {
		animation-name: blink;
		animation-duration: var(--blink-duration);
		animation-timing-function: var(--blink-timing-function);
		animation-delay: var(--blink-delay);
		/* animation-iteration-count: infinite; */
		animation-direction: var(--blink-animation-direction);
	}
	@keyframes blink {
		from,
		to {
			opacity: var(--blink-key-opacity-1);
		}
		50% {
			opacity: var(--blink-key-opacity-2);
		}
	}
	/* .eyeBlink .eyeBlink--infinite { */
	/* 	animation-delay: 5s; */
	/* 	animation-iteration-count: infinite; */
	/* } */
	/* .animaEyebrow { */
	/* } */
</style>
