<script>
	import '../Timeline.scss';
	import { reveal } from 'svelte-reveal';
	import { timelineData } from './timelineData.js';
</script>

<header
	id="experiences"
	class="flex w-auto items-center justify-center bg-[rgba(42,42,42,0)] p-5 text-3xl font-semibold text-white backdrop-blur-sm"
>
	Experiences
</header>
<div
	class="container-fluid mx-5 mt-10 rounded-xl bg-[#ffffff0e] p-10 backdrop-blur-xl sm:mx-14 md:mx-20 xl:mx-32"
>
	<div class="row sm:hidden">
		<div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
			<ul class="timeline">
				{#each timelineData as item}
					{#if item.isPeriod}
						<li class="timeline-item period">
							<div class="timeline-info"></div>
							<div class="timeline-marker"></div>
							<div class="timeline-content" use:reveal>
								<h2 class="timeline-title">{item.title}</h2>
							</div>
						</li>
					{:else}
						<li class="timeline-item">
							<div class="timeline-info" use:reveal>
								<span>{item.date}</span>
							</div>
							<div class="timeline-marker"></div>
							<div class="timeline-content" use:reveal>
								<h3 class="timeline-title font-semibold">{item.title}</h3>
								<p>{item.description}</p>
							</div>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	</div>
	<div class="row example-split hidden sm:block lg:hidden">
		<div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
			<ul class="timeline timeline-split">
				{#each timelineData as event}
					{#if event.isPeriod}
						<!-- Period Marker -->
						<li class="timeline-item period w-full">
							<div class="timeline-info"></div>
							<div class="timeline-marker"></div>
							<div class="timeline-content">
								<h2 class="timeline-title">{event.title}</h2>
							</div>
						</li>
					{:else}
						<!-- Event Item -->
						<li class="timeline-item">
							<div class="timeline-info">
								<span>{event.date}</span>
							</div>
							<div class="timeline-marker"></div>
							<div class="timeline-content">
								<h3 class="timeline-title font-semibold">{event.title}</h3>
								<p>{event.description}</p>
							</div>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	</div>
	<div class="row example-centered hidden lg:block">
		<div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
			<ul class="timeline timeline-centered flex flex-col-reverse">
				{#each timelineData as event}
					{#if event.isPeriod}
						<!-- Period Marker -->
						<li class="timeline-item period">
							<div class="timeline-info"></div>
							<div class="timeline-marker"></div>
							<div class="timeline-content">
								<h2 class="timeline-title" use:reveal>{event.title}</h2>
							</div>
						</li>
					{:else}
						<!-- Event Item -->
						<li class="timeline-item">
							<div class="timeline-info">
								<span use:reveal>{event.date}</span>
							</div>
							<div class="timeline-marker"></div>
							<div class="timeline-content" use:reveal>
								<h3 class="timeline-title font-semibold mb-2 text-lg">{event.title}</h3>
								<p>{event.description}</p>
							</div>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	</div>
</div>
