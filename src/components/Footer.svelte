<script>
	import Logo from '../portfoliologo.png';
	import SendBtn from './SendBtn.svelte';
	const socialLinks = [
		{ name: 'LinkedIn', icon: 'fab fa-linkedin', link: 'https://linkedin.com/in/mainakdasnits' },
		{ name: 'Github', icon: 'fab fa-github', link: 'https://github.com/tech-hunter-mainak' },
		{ name: 'Facebook', icon: 'fab fa-facebook', link: 'https://facebook.com/mainak.nitS' },
		{
			name: 'Instagram',
			icon: 'fab fa-instagram',
			link: 'https://instagram.com/mainak_das_personal'
		}
	];

	const navigationLinks = [
		{ name: 'About', link: '#' },
		{ name: 'Experiences', link: '#experiences' },
		{ name: 'Skills', link: '#skills' },
		{ name: 'Projects', link: '#projects' }
	];

	let email = '';
	let query = '';

	function submitForm() {
		// Placeholder action for form submission, e.g., send data to a server or email service
		window.location.href = `mailto:mainakdas.dev@gmail.com?cc=${email}&subject=Stay%20in%20Touch&body=${query}`;
		// Reset form
		email = '';
		query = '';
	}
</script>

<footer
	id="footer"
	class="bg-gradient-to-br from-[#3c311d] via-[#181404] to-[#0e0e0e] px-5 pt-24 text-white md:px-10"
>
	<!-- Top Section: Introduction and Contact Info -->
	<div
		class="container mx-auto flex flex-col gap-8 border-b border-[#8C4B20] px-6 py-12 md:flex-row md:justify-between"
	>
		<div>
			<h2 class="mb-4 text-4xl font-extrabold leading-tight tracking-wide">Let's Work Together</h2>
			<p class="mb-3 text-lg font-medium text-gray-400">
				I am open for freelance work. Feel free to start a project.
			</p>
		</div>
	</div>

	<!-- Middle Section: Links and Contact Form -->
	<div
		class="container mx-auto !mt-10 flex flex-col flex-wrap gap-8 px-6 py-12 md:flex-row md:justify-between"
	>
		<!-- Logo and Social Links -->
		<div class="flex w-full flex-1 flex-col items-center">
			<img src={Logo} alt="" class="mb-4 h-44 w-44 rounded-full" loading="lazy" />
			<h3 class="mb-2 text-3xl font-extrabold text-yellow-500">Mainak Das</h3>
			<p class="mb-4 font-medium text-gray-400">Creative Developer</p>
			<div class="flex gap-6">
				{#each socialLinks as { name, icon, link }}
					<a
						href={link}
						target="_blank"
						aria-label={name}
						class="transform text-2xl text-yellow-500 transition duration-300 hover:scale-110 hover:text-yellow-600"
					>
						<i class={icon}></i>
					</a>
				{/each}
			</div>
		</div>

		<!-- Navigation Links -->
		<div class="flex-1">
			<h4 class="mb-4 inline-block pb-1 text-2xl font-extrabold">Navigation</h4>
			<ul class="text-md grid space-y-2 text-gray-400">
				{#each navigationLinks as { name, link }}
					<li>
						<a href={link} class="!hover:text-yellow-400 transition duration-300">
							{name}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="flex-1">
			<div class="w-full lg:w-auto">
				<h4 class="mb-6 text-2xl font-extrabold">Stay in Touch</h4>
				<form on:submit|preventDefault={submitForm} class="space-y-4">
					<div>
						<label for="email" class="block text-sm font-medium text-gray-400">Email Address</label>
						<input
							id="email"
							type="email"
							bind:value={email}
							placeholder="Your email"
							required
							class="mt-1 w-full rounded-lg border border-gray-500 bg-[#a582342a] p-3 text-white outline-none transition duration-300 focus:ring-2 focus:ring-yellow-400"
						/>
					</div>
					<div>
						<label for="query" class="block text-sm font-medium text-gray-400">Your Message</label>
						<textarea
							id="query"
							bind:value={query}
							placeholder="Write your message here..."
							required
							class="mt-1 w-full rounded-lg border border-gray-500 bg-[#a582342a] p-3 text-white outline-none transition duration-300 focus:ring-2 focus:ring-yellow-400"
							rows="4"
						></textarea>
					</div>
					<SendBtn />
				</form>
			</div>
		</div>
	</div>

	<!-- Bottom Section: Contact Form and Copyright -->
	<div
		class="container mx-auto flex flex-col items-start justify-between gap-12 border-t border-[#8C4B20] px-6 py-12 lg:flex-row lg:items-center"
	>
		<!-- Contact Form -->
	</div>
	<div class="w-full py-3 text-center text-gray-400 lg:w-full lg:text-center">
		<p class="text-sm">Copyright © 2025 | All Rights Reserved.</p>
		<p class="mt-2 text-sm">India</p>
	</div>
</footer>

<style>
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
	#footer {
		clip-path: polygon(26% 0%, 0 9%, 0 100%, 100% 100%, 100% 20%);
	}
	@media screen and (max-width: 768px) {
		#footer {
			clip-path: polygon(30% 0%, 0 3%, 0 100%, 100% 100%, 100% 7%);
		}
	}
	@media screen and (max-width: 500px) {
		#footer {
			clip-path: polygon(30% 0%, 0 2%, 0 100%, 100% 100%, 100% 4%);
		}
	}
</style>
