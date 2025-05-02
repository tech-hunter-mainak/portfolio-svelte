<script>
	import { onMount } from 'svelte';
	import '../Hero.scss';
	import imaGE from '../mainak.webp';
	import Cube from './Cube.svelte';
	import CustomButton from './CustomButton.svelte';
	onMount(() => {
		const navbarMenu = document.getElementById('menu');
		const burgerMenu = document.getElementById('burger');
		const headerMenu = document.getElementById('header');

		// Open Close Navbar Menu on Click Burger
		if (burgerMenu && navbarMenu) {
			burgerMenu.addEventListener('click', () => {
				burgerMenu.classList.toggle('is-active');
				navbarMenu.classList.toggle('is-active');
			});
		}

		// Close Navbar Menu on Click Menu Links
		document.querySelectorAll('.menu-link').forEach((link) => {
			if (burgerMenu && navbarMenu)
				link.addEventListener('click', () => {
					burgerMenu.classList.remove('is-active');
					navbarMenu.classList.remove('is-active');
				});
		});

		// Change Header Background on Scrolling
		window.addEventListener('scroll', () => {
			if (headerMenu)
				if (window.scrollY >= 85) {
					// @ts-ignore
					headerMenu.classList.add('on-scroll');
				} else {
					headerMenu.classList.remove('on-scroll');
				}
		});

		// Fixed Navbar Menu on Window Resize
		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) {
				if (navbarMenu && navbarMenu.classList.contains('is-active')) {
					navbarMenu.classList.remove('is-active');
				}
			}
		});
	});
</script>

<section class="flex min-h-screen flex-col justify-center">
	<!-- Header Section -->
	<header class="header" id="header">
		<nav class="navbar container">
			<a href="#" class="brand hidden sm:block">Portfolio</a>
			<div class="burger z-20" id="burger">
				<span class="burger-line"></span>
				<span class="burger-line"></span>
				<span class="burger-line"></span>
			</div>
			<div class="menu z-10" id="menu">
				<ul class="menu-inner">
					<li class="menu-item"><a href="#" class="menu-link">About</a></li>
					<li class="menu-item"><a href="#experiences" class="menu-link">Experiences</a></li>
					<li class="menu-item"><a href="#skills" class="menu-link">Skills</a></li>
					<li class="menu-item"><a href="#projects" class="menu-link">Projects</a></li>
				</ul>
			</div>
			<CustomButton />
		</nav>
	</header>
	<!-- Main Section -->
	<main class="main">
		<section class="section banner banner-section">
			<div class="banner-column container">
				<img
					class="banner-image mb-10 !w-56 rounded-md bg-cover bg-bottom bg-no-repeat transition-all hover:sepia-0 md:mb-32 md:!h-96 md:!w-80 lg:!-mt-10"
					src={imaGE}
					alt="banner"
				/>
				<div class="banner-inner">
					<h1 class="heading-lg font-bold" style="color: rgb(124, 124, 124);">
						Hey there, its MAINAK
					</h1>
					<div class="card">
						<div class="loader">
							<p>I'm a</p>
							<div class="words">
								<span class="word font-semibold !text-yellow-500">Web Developer</span>
								<span class="word font-semibold !text-yellow-500">Coder</span>
								<span class="word font-semibold !text-yellow-500">ML Enthusiast</span>
								<span class="word font-semibold !text-yellow-500">Explorer</span>
								<span class="word font-semibold !text-yellow-500">Web Developer</span>
							</div>
						</div>
					</div>
					<aside class="w-full max-w-md rounded-lg bg-black p-6 font-mono text-white">
						<div class="flex items-center justify-between">
							<div class="flex space-x-2 text-red-500">
								<div class="h-3 w-3 rounded-full bg-red-500"></div>
								<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
								<div class="h-3 w-3 rounded-full bg-green-500"></div>
							</div>
							<p class="text-sm">bash</p>
						</div>
						<div class="mt-4">
							<p class="mb-1 text-green-400">$ systeminfo</p>
							<p class="mb-4 text-white">
								>> Pursuing a B.Tech in Computer Science and Engineering at NIT Silchar, I'm on an
								odyssey of continuous learning. I'm sculpting a multidimensional skill set, weaving
								my experiences into innovation and growth.
							</p>
							<p class="text-green-400">$ <span class="animate-ping font-extrabold">_</span></p>
						</div>
					</aside>
					<p class="font-mono"></p>
					<div class="mt-10 flex w-full justify-center md:w-[80%]">
						<Cube />
					</div>
				</div>
				<div class="banner-links">
					<a
						href="https://linkedin.com/in/mainakdasnits/"
						target="_blank"
						title="LinkedIn | Mainak Das"
						aria-label="LinkedIn Profile of Mainak Das"><i class="fab fa-linkedin"></i></a
					>
					<a
						href="https://facebook.com/mainak.nitS"
						title="Facebook | Mainak Das"
						aria-label="Facebook Profile of Mainak Das"
						target="_blank"><i class="fab fa-facebook"></i></a
					>
					<a
						href="https://https://www.instagram.com/mainak_das_personal/"
						target="_blank"
						title="Instagram | Mainak Das"
						aria-label="Instagram Profile of Mainak Das"><i class="fab fa-instagram"></i></a
					>
					<a
						href="https://github.com/tech-hunter-mainak/"
						target="_blank"
						title="Github | Mainak Das"
						aria-label="GitHub Profile of Mainak Das"><i class="fab fa-github"></i></a
					>
				</div>
			</div>
		</section>
	</main>
</section>

<style>
	.card {
		/* color used to softly clip top and bottom of the .words container */
		border-radius: 1.25rem;
		width: fit-content;
	}
	.loader {
		color: rgb(124, 124, 124);
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 25px;
		-webkit-box-sizing: content-box;
		box-sizing: content-box;
		height: 40px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		border-radius: 8px;
	}

	.words {
		overflow: hidden;
		position: relative;
	}
	.words::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(
			var(--bg-color) 10%,
			transparent 30%,
			transparent 70%,
			var(--bg-color) 90%
		);
		z-index: 20;
	}

	.word {
		display: block;
		height: 100%;
		padding-left: 6px;
		color: #956afa;
		animation: spin_4991 10s infinite;
	}

	@keyframes spin_4991 {
		10% {
			-webkit-transform: translateY(-102%);
			transform: translateY(-102%);
		}

		25% {
			-webkit-transform: translateY(-100%);
			transform: translateY(-100%);
		}

		35% {
			-webkit-transform: translateY(-202%);
			transform: translateY(-202%);
		}

		50% {
			-webkit-transform: translateY(-200%);
			transform: translateY(-200%);
		}

		60% {
			-webkit-transform: translateY(-302%);
			transform: translateY(-302%);
		}

		75% {
			-webkit-transform: translateY(-300%);
			transform: translateY(-300%);
		}

		85% {
			-webkit-transform: translateY(-402%);
			transform: translateY(-402%);
		}

		100% {
			-webkit-transform: translateY(-400%);
			transform: translateY(-400%);
		}
	}
</style>
