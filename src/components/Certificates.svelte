<script lang="ts">
	import { onMount } from 'svelte';
	import { slides } from './certificates';
	let currentSlide = 0;

	const showSlide = (index: number) => {
		currentSlide = (index + slides.length) % slides.length;
	};

	let interval: string | number | NodeJS.Timeout | undefined;
	onMount(() => {
		interval = setInterval(() => {
			showSlide(currentSlide + 1);
		}, 5000);
		return () => clearInterval(interval);
	});
</script>

<section id="certificates" class="px-5 sm:px-10 md:px-14 lg:px-20 xl:px-32 w-full flex flex-col items-center">
    <header
		class="flex mb-5 mt-10 w-auto items-center justify-center bg-[rgba(42,42,42,0)] p-5 text-3xl font-semibold text-white backdrop-blur-sm"
	>
		Certificates
	</header>
	<div class="w-full h-auto max-w-2xl mb-20">
		<div class="relative overflow-hidden rounded-lg shadow-lg">
			<!-- Carousel wrapper -->
			<div class="relative h-80 md:h-96 bg-[#3b3b3b54] backdrop-blur-lg shadow-xl shadow-gray-300">
				{#each slides as slide, i}
					<div
						class="absolute inset-0 transition-opacity duration-700"
						style="opacity: {currentSlide === i ? 1 : 0}"
					>
						<img src={slide.src} alt={slide.alt} class="h-full w-full object-contain" />
					</div>
				{/each}
			</div>
			<!-- Slider indicators -->
			<div class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
				{#each slides as _, i}
					<button
						on:click={() => showSlide(i)}
						class="h-3 w-3 rounded-full {currentSlide === i
							? 'bg-gray-800'
							: 'bg-gray-300'} transition hover:bg-gray-400 focus:outline-none"
					>
					</button>
				{/each}
			</div>
			<!-- Slider controls -->
			<button
				on:click={() => showSlide(currentSlide - 1)}
				class="absolute left-3 top-1/2 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200/50 transition hover:bg-gray-300 focus:outline-none"
			>
				<svg
					class="h-5 w-5 text-gray-600"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"
					></path>
				</svg>
			</button>
			<button
				on:click={() => showSlide(currentSlide + 1)}
				class="absolute right-3 top-1/2 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200/50 transition hover:bg-gray-300 focus:outline-none"
			>
				<svg
					class="h-5 w-5 text-gray-600"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
					></path>
				</svg>
			</button>
		</div>
	</div>
</section>
