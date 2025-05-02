<script lang="ts">
	import { onMount } from 'svelte';
	import { LeetCode } from 'leetcode-query';
  
	const username = 'mainak-2004';
	const radius = 60;
	const circumference = 2 * Math.PI * radius;
	const leetcode = new LeetCode();
  
	// raw & total counts
	let easy = 0, medium = 0, hard = 0;
	let totaleasy = 1, totalmedium = 1, totalhard = 1;
  
	// display percentages
	let per_easy = 0, per_medium = 0, per_hard = 0, acceptanceRate = 0;
  
	onMount(async () => {
	  try {
		const { matchedUser, allQuestionsCount } = await leetcode.user(username);
  
		// 1) solved counts
		matchedUser?.submitStats.acSubmissionNum.forEach(q => {
		  if (q.difficulty === 'Easy')   easy = q.count;
		  if (q.difficulty === 'Medium') medium = q.count;
		  if (q.difficulty === 'Hard')   hard = q.count;
		});
  
		// 2) total question counts
		allQuestionsCount.forEach(q => {
		  if (q.difficulty === 'Easy')   totaleasy = q.count;
		  if (q.difficulty === 'Medium') totalmedium = q.count;
		  if (q.difficulty === 'Hard')   totalhard = q.count;
		});
  
		// 3) compute percentages once all values are in place
		per_easy   = Math.ceil((easy / totaleasy)     * 100);
		per_medium = Math.ceil((medium / totalmedium) * 100);
		per_hard   = Math.ceil((hard / totalhard)     * 100);
		acceptanceRate = Math.ceil(
		  ((easy + medium + hard) /
		   (totaleasy + totalmedium + totalhard)) * 100
		);
  
		console.log({ easy, medium, hard, totaleasy, totalmedium, totalhard, per_easy, per_medium, per_hard, acceptanceRate });
	  } catch (err) {
		console.error('LeetCode fetch failed:', err);
	  }
	});
  </script>
  
  <div class="m-5 flex flex-col flex-wrap">
	<div>
	  <div class="text-2xl font-extrabold text-gray-300">LeetCode Profile</div>
	  <div>Username: {username}</div>
	</div>
  
	<div class="mt-5 flex flex-col-reverse items-center lg:flex-row">
	  <div class="container w-full min-w-60">
		{#each [
		  { label: 'Easy',   count: easy,   total: totaleasy,   pct: per_easy,   color: 'bg-green-500' },
		  { label: 'Medium', count: medium, total: totalmedium, pct: per_medium, color: 'bg-yellow-500' },
		  { label: 'Hard',   count: hard,   total: totalhard,   pct: per_hard,   color: 'bg-red-500' }
		] as { label, count, total, pct, color }}
		  <div class="skill-box">
			<span class="title flex justify-between">
			  <div>{label}</div>
			  <div><span class="text-lg">{count}</span>/<span>{total}</span></div>
			</span>
			<div class="skill-bar">
			  <span class="skill-per {color}" style="width: {pct}%"></span>
			</div>
		  </div>
		{/each}
	  </div>
  
	  <div class="m-6 flex w-full items-center justify-center overflow-hidden rounded-full">
		<svg class="h-auto w-36 transform translate-x-1 translate-y-1" aria-hidden="true">
		  <circle
			class="text-gray-300"
			stroke-width="7"
			stroke="currentColor"
			fill="transparent"
			r={radius}
			cx={radius + 10}
			cy={radius + 10}
		  />
		  <circle
			class="text-green-600"
			stroke-width="7"
			stroke-dasharray={circumference}
			stroke-dashoffset={circumference - (acceptanceRate/100) * circumference}
			stroke-linecap="round"
			stroke="currentColor"
			fill="transparent"
			r={radius}
			cx={radius + 10}
			cy={radius + 10}
		  />
		</svg>
		<span class="absolute text-center text-sm text-gray-300">
		  <div class="text-center">{acceptanceRate}%</div>
		  acceptance
		</span>
	  </div>
	</div>
  </div>
  
  <style>
	.container { background: #282828; padding: 10px 20px; border-radius: 7px; }
	.skill-box { width: 100%; margin: 25px 0; }
	.title { font-size: 14px; font-weight: 600; color: rgb(226,226,226); }
	.skill-bar { height: 8px; width: 100%; border-radius: 6px; margin-top: 6px; background: rgba(236,236,236,0.1); }
	.skill-per { display: block; height: 100%; border-radius: 6px; animation: progress 0.4s ease-in-out forwards; opacity: 0; }
	@keyframes progress {
	  0%   { width: 0; opacity: 1; }
	  100% { opacity: 1; }
	}
  </style>
  