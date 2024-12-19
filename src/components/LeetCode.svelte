<script lang="ts">
	import { onMount } from 'svelte';

	const radius = 50;
	const circumference = 2 * Math.PI * radius;
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
				const leetData = await fetch('https://leetcode-stats-api.herokuapp.com/mainak-2004');
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
</script>

<div class="m-5 flex h-auto w-auto flex-col flex-wrap">
	<div>
		<div class="text-2xl font-extrabold text-gray-300">LeetCode Profile</div>
		<div>Username : mainak-2004</div>
	</div>
	<div class="flex mt-5 flex-col-reverse lg:flex-row items-center">
		<div class="container w-full min-w-60">
			<div class="skill-box">
				<span class="title flex justify-between"
					><div>Easy</div>
					<div><span class="text-lg">{easy}</span>/<span>{totaleasy}</span></div></span
				>

				<div class="skill-bar">
					<span class="skill-per bg-green-500" style="width: {per_easy}%;"></span>
				</div>
			</div>

			<div class="skill-box">
				<span class="title flex justify-between"
					><div>Medium</div>
					<div><span class="text-lg">{medium}</span>/<span>{totalmedium}</span></div></span
				>

				<div class="skill-bar">
					<span class="skill-per bg-yellow-500" style="width: {per_medium}%;"></span>
				</div>
			</div>
			<div class="skill-box">
				<span class="title flex justify-between"
					><div>Hard</div>
					<div><span class="text-lg">{hard}</span>/<span>{totalhard}</span></div></span
				>

				<div class="skill-bar">
					<span class="skill-per bg-red-500" style="width: {per_hard}%;"></span>
				</div>
			</div>
		</div>
		<div class="m-6 w-full flex items-center justify-center overflow-hidden rounded-full">
			<svg class="h-auto w-36 translate-x-1 translate-y-1 transform" aria-hidden="true">
				<circle
					class="text-gray-300"
					stroke-width="7"
					stroke="currentColor"
					fill="transparent"
					r="60"
					cx="70"
					cy="70"
				/>
				<circle
					class="text-green-600"
					stroke-width="7"
					stroke-dasharray={circumference}
					stroke-dashoffset={circumference - (Math.ceil(data.acceptanceRate) / 100) * circumference}
					stroke-linecap="round"
					stroke="currentColor"
					fill="transparent"
					r="60"
					cx="70"
					cy="70"
				/>
			</svg>
			<span class="absolute text-center text-sm text-gray-300">
				<div class="text-center">{data ? data.acceptanceRate : 0}%</div>
				acceptance
			</span>
		</div>
	</div>
</div>

<style>
	.container {
		position: relative;
		background: #282828;
		padding: 10px 20px;
		border-radius: 7px;
	}

	.container .skill-box {
		width: 100%;
		margin: 25px 0;
	}

	.skill-box .title {
		font-size: 14px;
		font-weight: 600;
		color: rgb(226, 226, 226);
	}

	.skill-box .skill-bar {
		height: 8px;
		width: 100%;
		border-radius: 6px;
		margin-top: 6px;
		background: rgba(236, 236, 236, 0.1);
	}

	.skill-bar .skill-per {
		position: relative;
		display: block;
		height: 100%;
		width: 90%;
		border-radius: 6px;
		animation: progress 0.4s ease-in-out forwards;
		opacity: 0;
	}

	@keyframes progress {
		0% {
			width: 0;
			opacity: 1;
		}

		100% {
			opacity: 1;
		}
	}
</style>
