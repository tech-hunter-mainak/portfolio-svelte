<script>
	import CustomButton from './CustomButton.svelte';

	// State for mobile menu toggle
	let mobileMenuOpen = false;
	// State for user dropdown menu toggle
	let dropdownOpen = false;

	// Toggle the mobile menu
	const toggleMobileMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	// Toggle the user dropdown
	const toggleDropdown = () => {
		dropdownOpen = !dropdownOpen;
	};
</script>

<nav class="fixed z-10 w-screen bg-[#3b3a3a58] backdrop-blur-lg">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<!-- Mobile menu button-->
				<button
					type="button"
					on:click={toggleMobileMenu}
					class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded={mobileMenuOpen}
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class={mobileMenuOpen ? 'hidden size-6' : 'block size-6'}
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<svg
						class={mobileMenuOpen ? 'block size-6' : 'hidden size-6'}
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex shrink-0 items-center">
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
						alt="Your Company"
					/>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<a
							href="#"
							class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
							aria-current="page">Dashboard</a
						>
						<a
							href="#"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							>Team</a
						>
						<a
							href="#"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							>Projects</a
						>
						<a
							href="#"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
							>Calendar</a
						>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<CustomButton />
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	<div class={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
		<div class="space-y-1 px-2 pb-3 pt-2">
			<a
				href="#"
				class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
				aria-current="page">Dashboard</a
			>
			<a
				href="#"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
				>Team</a
			>
			<a
				href="#"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
				>Projects</a
			>
			<a
				href="#"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
				>Calendar</a
			>
		</div>
	</div>
</nav>
