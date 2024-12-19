<script lang="ts">
	import { onMount } from 'svelte';

	let container: HTMLDivElement;
	let timeoutId: any; // Variable to hold the timeout ID

	const maxScroll = 400; // Maximum scroll effect

	const handleScroll = () => {
		const scrollPosition = window.scrollY;

		clearTimeout(timeoutId); // Clear any previously set timeout

		timeoutId = setTimeout(() => {
			if (scrollPosition >= 250 && scrollPosition < 500) {
				// Automatically scroll to maxScroll position
				document.getElementById('experience')?.scrollIntoView({
					behavior: 'smooth'
				});
			}
		}, 800);

		if (container) {
			// Dynamically adjust perspective and opacity
			const perspective = Math.max(100, 800 - (scrollPosition / maxScroll) * 800);
			const opacity = Math.max(0, 1 - scrollPosition / 450);

			container.style.perspective = `${perspective}px`;
			container.style.opacity = `${opacity}`;
		}
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="cube-container" bind:this={container}>
	<div
		class="cube"
		on:click={() => {
			document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' });
		}}
	>
		<div class="face front">Explore</div>
		<div class="face back">Explore</div>
		<div class="face right">Explore</div>
		<div class="face left">Explore</div>
		<div class="face top">Explore</div>
		<div class="face bottom">Explore</div>
	</div>
</div>

<style>
	.cube-container {
		width: 100px;
		height: 100px;
		perspective: 800px;
		margin: 50px auto;
		position: sticky;
		top: 50%;
		transform: translateY(-50%);
		transition:
			perspective 0.2s ease,
			opacity 0.2s ease;
	}

	.cube {
		position: relative;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		animation: rotate 15s infinite linear;
	}

	.face {
		position: absolute;
		width: 100px;
		height: 100px;
		color: rgba(0, 0, 0, 0.705);
		font-weight: 600;
		font-size: 18px;
		text-align: center;
		line-height: 100px;
		background: transparent;
		opacity: 0.9;
		border: 2px solid;
		border-image: linear-gradient(
			90deg,
			rgba(153, 101, 21, 1) 0%,
			rgba(213, 150, 28, 1) 40%,
			rgba(171, 85, 28, 1) 100%
		);
		box-shadow: 0 0 100px rgba(171, 85, 28, 0.61);
	}

	.front {
		transform: translateZ(50px);
		background-color: #c78f29; /* Mud yellow */
		background-image: linear-gradient(160deg, #c78f29 0%, #f3e1a1 100%); /* Mud yellow to golden */
	}

	.back {
		transform: rotateY(180deg) translateZ(50px);
		background-color: #c78f29; /* Mud yellow */
		background-image: linear-gradient(160deg, #c78f29 0%, #f3e1a1 100%); /* Mud yellow to golden */
	}

	.right {
		transform: rotateY(90deg) translateZ(50px);
		background-color: #e29e2a; /* Golden */
		background-image: linear-gradient(
			160deg,
			#e29e2a 0%,
			#f9c042 100%
		); /* Golden to light golden */
	}

	.left {
		transform: rotateY(-90deg) translateZ(50px);
		background-color: #e29e2a; /* Golden */
		background-image: linear-gradient(
			160deg,
			#e29e2a 0%,
			#f9c042 100%
		); /* Golden to light golden */
	}

	.top {
		transform: rotateX(90deg) translateZ(50px);
		background-color: #aa571c; /* Dark orange brown */
		background-image: linear-gradient(
			160deg,
			#aa571c 0%,
			#9f4d24 100%
		); /* Dark orange brown gradient */
	}

	.bottom {
		transform: rotateX(-90deg) translateZ(50px);
		background-color: #aa571c; /* Dark orange brown */
		background-image: linear-gradient(
			160deg,
			#aa571c 0%,
			#9f4d24 100%
		); /* Dark orange brown gradient */
	}

	@keyframes rotate {
		0% {
			transform: rotateX(0) rotateY(0) rotateZ(0);
		}

		100% {
			transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
		}
	}
</style>
