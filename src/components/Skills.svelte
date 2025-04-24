<script lang="ts">
	import { reveal } from 'svelte-reveal';
	import Coding from './Coding.svelte';
	import Frameworks from './Frameworks.svelte';
	import GitHub from './GitHub.svelte';
	import Interests from './Interests.svelte';
	import LeetCode from './LeetCode.svelte';
	let skills1 = 0;
</script>

<section id="skills">
	<header
		use:reveal
		class="mt-10 flex w-auto items-center justify-center bg-[rgba(42,42,42,0)] p-5 text-3xl font-semibold text-white backdrop-blur-sm"
	>
		Skills
	</header>

	<div use:reveal class="mx-5 sm:hidden">
		<label for="tabs" class="sr-only">Select your country</label>
		<select
			id="tabs"
			class="block w-full rounded-lg border border-gray-300 bg-[#000] p-2.5 text-sm text-[#85858517] focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
			on:change={(e) => {
				const selectedIndex = (e.target as HTMLSelectElement)?.selectedIndex ?? 0;
				if (selectedIndex === 0) {
					skills1 = 0;
				} else if (selectedIndex === 1) {
					skills1 = 1;
				} else if (selectedIndex === 2) {
					skills1 = 2;
				} else if (selectedIndex === 3) {
					skills1 = 3;
				}
			}}
		>
			<option>Coding Languages</option>
			<option>Frameworks</option>
			<option>Interests</option>
			<option>Github Stats</option>
		</select>
	</div>

	<div
		id="container"
		class="m-5 flex flex-row gap-x-6 rounded-xl bg-[#ffffff11] backdrop-blur-lg sm:mx-14 md:mx-20 xl:mx-32"
	>
		<div class="radio-container m-5 ml-0 hidden h-min flex-col justify-center sm:flex">
			<input
				checked
				id="radio-free"
				name="radio"
				type="radio"
				on:click={() => {
					skills1 = 0;
				}}
			/>
			<label for="radio-free" class="h-full">Coding Languages</label>
			<input
				id="radio-basic"
				name="radio"
				type="radio"
				on:click={() => {
					skills1 = 1;
				}}
			/>
			<label for="radio-basic" class="h-full w-full">Frameworks</label>
			<input
				id="radio-premium"
				name="radio"
				type="radio"
				on:click={() => {
					skills1 = 2;
				}}
			/>
			<label for="radio-premium" class="h-full w-full">Interests</label>
			<input
				id="radio-git"
				name="radio"
				type="radio"
				on:click={() => {
					skills1 = 3;
				}}
			/>
			<label for="radio-git" class="h-full w-full">GitHub Stats</label>
			<div class="glider-container">
				<div class="glider"></div>
			</div>
		</div>
		<div class="h-auto w-full border">
			{#if skills1 % 4 == 0}
				<div>
					<Coding />
					<LeetCode />
				</div>
			{:else if skills1 % 4 == 1}
				<Frameworks />
			{:else if skills1 % 4 == 2}
				<Interests />
			{:else}
				<GitHub />
			{/if}
		</div>
	</div>
</section>

<style>
	input {
		display: none;
	}
	label {
		width: max-content;
	}
	.radio-container {
		--main-color: #f7e479;
		--main-color-opacity: #f7e4791c;

		/* change this according inputs count */
		--total-radio: 4;

		display: flex;
		flex-direction: column;
		position: relative;
		width: max-content;
		padding-left: 0.5rem;
	}

	.radio-container input {
		cursor: pointer;
		appearance: none;
	}
	.radio-container .glider-container {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(27, 27, 27, 1) 50%,
			rgba(0, 0, 0, 0) 100%
		);
		width: 1px;
	}
	.radio-container .glider-container .glider {
		position: relative;
		height: calc(100% / var(--total-radio));
		width: 100%;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0) 0%,
			var(--main-color) 50%,
			rgba(0, 0, 0, 0) 100%
		);
		transition: transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56);
	}
	.radio-container .glider-container .glider::before {
		content: '';
		position: absolute;
		height: 60%;
		width: 300%;
		top: 50%;
		transform: translateY(-50%);
		background: var(--main-color);
		filter: blur(10px);
	}
	.radio-container .glider-container .glider::after {
		content: '';
		position: absolute;
		left: 0;
		height: 100%;
		width: 150px;
		background: linear-gradient(90deg, var(--main-color-opacity) 0%, rgba(0, 0, 0, 0) 100%);
	}
	.radio-container label {
		cursor: pointer;
		padding: 1rem;
		position: relative;
		color: grey;
		transition: all 0.3s ease-in-out;
	}

	.radio-container input:checked + label {
		color: var(--main-color);
	}

	.radio-container input:nth-of-type(1):checked ~ .glider-container .glider {
		transform: translateY(0);
	}

	.radio-container input:nth-of-type(2):checked ~ .glider-container .glider {
		transform: translateY(100%);
	}

	.radio-container input:nth-of-type(3):checked ~ .glider-container .glider {
		transform: translateY(200%);
	}

	.radio-container input:nth-of-type(4):checked ~ .glider-container .glider {
		transform: translateY(300%);
	}

	.radio-container input:nth-of-type(5):checked ~ .glider-container .glider {
		transform: translateY(400%);
	}

	.radio-container input:nth-of-type(6):checked ~ .glider-container .glider {
		transform: translateY(500%);
	}

	.radio-container input:nth-of-type(7):checked ~ .glider-container .glider {
		transform: translateY(600%);
	}

	.radio-container input:nth-of-type(8):checked ~ .glider-container .glider {
		transform: translateY(700%);
	}

	.radio-container input:nth-of-type(9):checked ~ .glider-container .glider {
		transform: translateY(800%);
	}

	.radio-container input:nth-of-type(10):checked ~ .glider-container .glider {
		transform: translateY(900%);
	}

	@media screen and (max-width: 640px) {
		.radio-container {
			display: none !important;
		}
	}
</style>
