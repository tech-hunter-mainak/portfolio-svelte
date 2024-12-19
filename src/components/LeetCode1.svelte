<script lang="ts">
	import { onMount } from 'svelte';

	let data: any = {};
	// Reactive variables for the progress circle percentages
	let easy = 80;
	let medium = 90;
	let hard = 90;
	let per_easy = 80;
	let per_medium = 90;
	let per_hard = 90;
	let totaleasy = 80;
	let totalmedium = 90;
	let totalhard = 90;
	onMount(() => {
		try {
			const leetcodeData = async () => {
				const leetData = await fetch('https://leetcode-stats-api.herokuapp.com/shouvikpaul04');
				data = await leetData.json();
				console.log(data);
				easy = data.easySolved;
				medium = data.mediumSolved;
				hard = data.hardSolved;
				totaleasy = data.totalEasy;
				totalmedium = data.totalMedium;
				totalhard = data.totalHard;

				per_easy = Math.ceil((easy / totaleasy) * 100);
				per_medium = Math.ceil((medium / totalmedium) * 100);
				per_hard = Math.ceil((hard / totalhard) * 100);
			};
			leetcodeData();
		} catch (error) {
			throw new Error('Error fetching leetcode data');
		}
	});

	// Calculating the circumference of the circle
	const radius = 50;
	const circumference = 2 * Math.PI * radius;
</script>

<div class="px-10 py-20">
	<div class="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-10">
		<!-- Performance Card -->
		<div class="m-6 flex items-center justify-center overflow-hidden rounded-full bg-white">
			<svg
				class="h-min w-min translate-x-1 translate-y-1 transform bg-slate-500"
				aria-hidden="true"
			>
				<circle
					class="text-gray-300"
					stroke-width="6"
					stroke="currentColor"
					fill="transparent"
					r="50"
					cx="60"
					cy="60"
				/>
				<circle
					class="text-green-600"
					stroke-width="5"
					stroke-dasharray={circumference}
					stroke-dashoffset={circumference - (per_easy / 100) * circumference}
					stroke-linecap="round"
					stroke="currentColor"
					fill="transparent"
					r="50"
					cx="60"
					cy="60"
				/>
			</svg>
			<span class="absolute text-green-700">
				<span class="text-center text-2xl font-semibold">{easy}/</span><span>{totaleasy}</span>
			</span>
		</div>
		<div class="-m-6 flex items-center justify-center overflow-hidden rounded-full">
			<svg class="h-32 w-32 translate-x-1 translate-y-1 transform" aria-hidden="true">
				<circle
					class="text-gray-300"
					stroke-width="10"
					stroke="currentColor"
					fill="transparent"
					r="50"
					cx="60"
					cy="60"
				/>
				<circle
					class="text-yellow-600"
					stroke-width="10"
					stroke-dasharray={circumference}
					stroke-dashoffset={circumference - (per_easy / 100) * circumference}
					stroke-linecap="round"
					stroke="currentColor"
					fill="transparent"
					r="50"
					cx="60"
					cy="60"
				/>
			</svg>
			<span class="absolute text-2xl text-yellow-700">
				<div class="text-center">{easy}</div>
				<hr class="h-0.5 w-full bg-slate-200" />
				<div>{totaleasy}</div>
			</span>
		</div>

		<!-- Storage Card -->
		<div class="-m-6 flex items-center justify-center overflow-hidden rounded-full bg-white">
			<svg class="h-32 w-32 translate-x-1 translate-y-1 transform" aria-hidden="true">
				<circle
					class="text-gray-300"
					stroke-width="10"
					stroke="currentColor"
					fill="transparent"
					r="50"
					cx="60"
					cy="60"
				/>
				<circle
					class="text-red-600"
					stroke-width="10"
					stroke-dasharray={circumference}
					stroke-dashoffset={circumference - (per_hard / 100) * circumference}
					stroke-linecap="round"
					stroke="currentColor"
					fill="transparent"
					r="50"
					cx="60"
					cy="60"
				/>
			</svg>
			<span class="absolute text-2xl text-red-700">{per_hard}%</span>
		</div>
	</div>
</div>
