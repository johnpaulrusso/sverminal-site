<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<header>
	<div
		class="flex h-16 w-full items-center justify-between border-b-[1px] border-slate-600 bg-gradient-to-r from-slate-950 to-slate-900 px-2 text-white"
	>
		<a class="flex items-center justify-around gap-2 font-mono text-2xl" href="/">
			<Logo size={32} />
			<div>SVERMINAL</div>
		</a>

		<!-- Hamburger Menu Button for Mobile -->
		<button
			id="menu-btn"
			class="block p-1 text-white focus:outline-none sm:hidden"
			aria-controls="menu"
			aria-expanded="false"
			aria-label="Open menu"
		>
			<svg
				class="h-7 w-7"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				></path>
			</svg>
		</button>

		<!-- Navigation Links (hidden on mobile by default) -->
		<div
			id="menu"
			role="menu"
			tabindex="0"
			aria-hidden="true"
			class="hidden w-full flex-col font-mono sm:flex sm:w-auto sm:flex-row sm:items-center"
		>
			<a href="/demo" class="px-4 py-2 text-white hover:text-slate-300" role="menuitem">Demo</a>
			<a href="/documentation" class="px-4 py-2 text-white hover:text-slate-300" role="menuitem"
				>Documentation</a
			>
			<a
				href="https://github.com/johnpaulrusso/sverminal"
				aria-label="Link to Github Repository"
				class="px-4 py-2 text-white hover:text-slate-300"
				role="menuitem"
			>
				<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-.8-4-.8-.5-1.3-1.2-1.6-1.2-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.5 2.4 1 3 .8.1-.6.4-1 .7-1.2-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.7.9 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.4.7.9.7 1.8v2.6c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.4 18.6 0 12 0z"
					/>
				</svg></a
			>
		</div>

		<!-- Dropdown Menu -->
		<div
			id="dropdown-menu"
			role="menu"
			tabindex="0"
			on:mouseleave={() => {
				// hideMenu();
			}}
			aria-hidden="true"
			class="absolute right-4 top-14 z-10 hidden flex-col bg-gradient-to-r from-slate-700 to-slate-600 p-4 shadow-lg"
		>
			<a href="/" class="px-4 py-2 text-white hover:text-slate-300" role="menuitem">Home</a>
			<a href="/about" class="px-4 py-2 text-white hover:text-slate-300" role="menuitem">About</a>
			<a href="/docs" class="px-4 py-2 text-white hover:text-slate-300" role="menuitem"
				>Documentation</a
			>
			<a href="/report" class="px-4 py-2 text-white hover:text-slate-300" role="menuitem">Report</a>
		</div>
	</div>
</header>

<div class="min-h-[calc(100vh-20rem)]">
	{@render children()}
</div>

<footer
	class="flex min-h-64 w-full flex-col items-center justify-center border-t-[1px] border-slate-600 bg-gradient-to-r from-slate-950 to-slate-900 p-4 pt-0 text-white"
>
	<div class="flex w-full grow items-center justify-between text-center">
		<div class="font-sm flex grow flex-col gap-4 font-mono">
			<a href="/#getting-started">Getting Started</a>
			<div>Live Demo</div>
			<div>Documentation</div>
			<div>Contribute</div>
		</div>
	</div>
	<div class="text-xs">Copyright &copy; 2024</div>
</footer>
