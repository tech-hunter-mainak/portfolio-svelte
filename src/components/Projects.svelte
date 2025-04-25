<script>
	import projects from './projects';
</script>

<section id="projects" class="mx-5 sm:mx-14 md:mx-20 lg:mx-32">
	<header
		class="flex w-auto items-center justify-center bg-[rgba(42,42,42,0)] p-5 text-3xl font-semibold text-white backdrop-blur-sm"
	>
		Projects
	</header>
	<div class="flex flex-wrap justify-between">
		{#each projects as project}
			<div
				class="card group relative m-4 min-w-60 max-w-96 cursor-pointer overflow-hidden rounded-lg border-r-2 border-t-2 border-gray-900 bg-gradient-to-tl from-[#231f14] to-[#000000] text-gray-300 transition-transform hover:from-[#211c10] hover:to-[#272727] hover:brightness-90"
			>
				<div class="h-[calc(100%-2.5px)] px-8 py-8">
					<!-- Card Content -->
					<div class="text-xl font-bold uppercase">{project.title}</div>
					<a href={project.subtitle} target="_blank"
						><div class="uppercase tracking-widest text-gray-300">Link</div></a
					>
					<!-- Image Section -->
					<img
						loading="lazy"
						src={project.image}
						alt={project.title}
						class="my-4 h-44 w-full rounded-md object-cover"
					/>
					<div class="mt-1 text-sm text-gray-400">{project.date}</div>
					<div class="mt-8 text-gray-400">
						<ul class="flex flex-wrap gap-1">
							{#each project.tools as tool}
								<li
									class="rounded-md bg-[rgba(234,178,8,0.82)] px-1 py-0.5 text-xs font-bold text-black"
								>
									{tool}
								</li>
							{/each}
						</ul>
						<p class="mt-4">{project.description}</p>
					</div>
				</div>

				<!-- Hover Effects -->
				<div
					class="absolute bottom-0 m-auto h-2 w-full rounded bg-gradient-to-l via-yellow-500 blur-2xl transition-all group-hover:blur-xl"
				></div>
				<div
					class="m-auto h-0.5 w-[70%] rounded bg-gradient-to-l via-yellow-950 transition-all group-hover:w-full group-hover:via-yellow-500"
				></div>
			</div>
		{/each}
	</div>
</section>
