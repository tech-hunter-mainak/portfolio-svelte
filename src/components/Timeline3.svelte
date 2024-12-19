<script>
	import '../Timeline.scss';
	import { reveal } from 'svelte-reveal';
</script>

<header
	id="experiences"
	class="flex w-auto items-center justify-center bg-[rgba(42,42,42,0)] p-5 text-3xl font-semibold text-white backdrop-blur-sm"
>
	Experiences
</header>
<div
	class="container-fluid ml-5 mr-5 mt-10 rounded-xl bg-[#ffffff0e] p-10 backdrop-blur-xl sm:ml-14 sm:mr-14 md:ml-20 md:mr-20 xl:ml-32 xl:mr-32"
>
	<div class="row example-basic">
		<div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
			<ul class="timeline flex flex-col justify-around">
				<li class="timeline-item">
					<div class="timeline-info">
						<span>March 12, 2016</span>
					</div>
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<h3 class="timeline-title">IEEE IS3IP-2024 Summer Internship</h3>
						<p>
							Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget,
							posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
							Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis
							pretium. Pellentesque ut neque.
						</p>
					</div>
				</li>
				<li class="timeline-item">
					<div class="timeline-info">
						<span>March 23, 2016</span>
					</div>
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<h3 class="timeline-title">Event Title</h3>
						<p>
							Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget,
							posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
							Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis
							pretium. Pellentesque ut neque.
						</p>
					</div>
				</li>
				<li class="timeline-item period">
					<div class="timeline-info"></div>
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<h2 class="timeline-title">April 2016</h2>
					</div>
				</li>
				<li class="timeline-item">
					<div class="timeline-info">
						<span>April 02, 2016</span>
					</div>
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<h3 class="timeline-title">Event Title</h3>
						<p>
							Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget,
							posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
							Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis
							pretium. Pellentesque ut neque.
						</p>
					</div>
				</li>
				<li class="timeline-item">
					<div class="timeline-info">
						<span>April 28, 2016</span>
					</div>
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<h3 class="timeline-title">Event Title</h3>
						<p>
							Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget,
							posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
							Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis
							pretium. Pellentesque ut neque.
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="row example-split">
		<div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
			<ul class="timeline timeline-split">
				<li class="timeline-item">
					<div class="timeline-info">
						<span>March 12, 2016</span>
					</div>
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<h3 class="timeline-title">IEEE IS3IP-2024 Summer Internship</h3>
						<p>
							Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget,
							posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
							Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis
							pretium. Pellentesque ut neque.
						</p>
					</div>
				</li>
				<li class="timeline-item">
					<div class="timeline-info">
						<span>March 23, 2016</span>
					</div>
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<h3 class="timeline-title">Event Title</h3>
						<p>
							Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget,
							posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
							Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis
							pretium. Pellentesque ut neque.
						</p>
					</div>
				</li>
				<li class="timeline-item period w-full">
					<div class="timeline-info"></div>
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<h2 class="timeline-title">April 2016</h2>
					</div>
				</li>
				<li class="timeline-item">
					<div class="timeline-info">
						<span>April 02, 2016</span>
					</div>
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<h3 class="timeline-title">Event Title</h3>
						<p>
							Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget,
							posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
							Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis
							pretium. Pellentesque ut neque.
						</p>
					</div>
				</li>
				<li class="timeline-item">
					<div class="timeline-info">
						<span>April 28, 2016</span>
					</div>
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<h3 class="timeline-title">Event Title</h3>
						<p>
							Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget,
							posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
							Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis
							pretium. Pellentesque ut neque.
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="row example-centered">
		<div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
			<ul
				class="timeline timeline-centered flex flex-col-reverse"
				style="display: flex; flex-direction: column-reverse;"
			>
				<li class="timeline-item">
					<div class="timeline-info">
						<span use:reveal>March 12, 2016</span>
					</div>
					<div class="timeline-marker"></div>
					<div class="timeline-content" use:reveal>
						<h3 class="timeline-title">Event Title</h3>
						<p>
							Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget,
							posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
							Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis
							pretium. Pellentesque ut neque.
						</p>
					</div>
				</li>
				<li class="timeline-item">
					<div class="timeline-info">
						<span use:reveal>March 23, 2016</span>
					</div>
					<div class="timeline-marker"></div>
					<div class="timeline-content" use:reveal>
						<h3 class="timeline-title">Event Title</h3>
						<p>
							Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget,
							posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
							Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis
							pretium. Pellentesque ut neque.
						</p>
					</div>
				</li>
				<li class="timeline-item period">
					<div class="timeline-info"></div>
					<div class="timeline-marker"></div>
					<div class="timeline-content">
						<h2 class="timeline-title" use:reveal>April 2016</h2>
					</div>
				</li>
				<li class="timeline-item">
					<div class="timeline-info">
						<span use:reveal>April 02, 2016</span>
					</div>
					<div class="timeline-marker"></div>
					<div class="timeline-content" use:reveal>
						<h3 class="timeline-title">Event Title</h3>
						<p>
							Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget,
							posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
							Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis
							pretium. Pellentesque ut neque.
						</p>
					</div>
				</li>
				<li class="timeline-item">
					<div class="timeline-info">
						<span use:reveal>April 28, 2016</span>
					</div>
					<div class="timeline-marker"></div>
					<div class="timeline-content" use:reveal>
						<h3 class="timeline-title">Event Title</h3>
						<p>
							Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget,
							posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla.
							Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis eu pede mollis
							pretium. Pellentesque ut neque.
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	@media screen and (min-width: 768px) {
		.example-split {
			display: block;
		}
		.example-centered {
			display: none;
		}
		.example-basic {
			display: none;
		}
	}
	@media screen and (max-width: 768px) {
		.example-basic {
			display: block;
		}
		.example-split {
			display: none;
		}
		.example-centered {
			display: none;
		}
	}
	@media screen and (min-width: 992px) {
		.example-basic {
			display: none;
		}
		.example-split {
			display: none;
		}
		.example-centered {
			display: block;
		}
	}
</style>
