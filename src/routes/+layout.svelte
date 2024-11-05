<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<header>
	<div
		class="flex h-16 w-full items-center justify-between border-b-[1px] border-gray-600 bg-gradient-to-r from-gray-950 to-gray-900 px-2 text-white"
	>
		<a class="flex items-center justify-around gap-2 font-mono text-2xl" title="Home" href="/">
			<Logo size={32} />
			<div class="hidden md:block">SVERMINAL</div>
		</a>

		<!-- Navigation Links (hidden on mobile by default) -->
		<div
			id="menu"
			role="menu"
			tabindex="0"
			class="font-mono flex w-auto flex-row items-center"
		>
			<a href="/" class="px-4 py-2 text-white hover:text-gray-300 inline-flex items-center" role="menuitem" title="Home"><i class="fa-solid fa-home"></i><span class="hidden sm:inline sm:p-2">Home</span></a>
			<a href="/demo" class="px-4 py-2 text-white hover:text-gray-300 inline-flex items-center" role="menuitem" title="Demo"><i class="fa-solid fa-terminal"></i><span class="hidden sm:inline sm:p-2">Demo</span></a>
			<a href="/documentation" class="px-4 py-2 text-white hover:text-gray-300 inline-flex items-center" role="menuitem" title="Docs"
				><i class="fa-solid fa-book"></i><span class="hidden sm:inline sm:p-2">Docs</span></a
			>
			<a
				href="https://github.com/johnpaulrusso/sverminal"
				aria-label="Link to Github Repository"
				class="px-4 py-2 text-white hover:text-gray-300 inline-flex items-center"
				role="menuitem" title="Contribute"
			>
            <i class="fa-brands fa-github"></i><span class="hidden sm:inline sm:p-2" >Contribute</span></a
			>
		</div>

	</div>
</header>

<div class="min-h-[calc(100vh-20rem)]">
	{@render children()}
</div>

<footer
	class="flex min-h-64 w-full flex-col items-center justify-center border-t-[1px] border-gray-600 bg-gradient-to-r from-gray-950 to-gray-900 p-4 pt-0 text-white"
>
	<div class="flex w-full grow items-center justify-between text-center">
		<div class="font-sm flex grow flex-col gap-4 font-mono">
			<a href="/">Home</a>
			<a href="/#getting-started">Getting Started</a>
			<a href="/demo">Live Demo</a>
			<a href="/documentation">Documentation</a>
			<a href="https://github.com/johnpaulrusso/sverminal">Contribute</a>
		</div>
	</div>
	<div class="text-xs">Copyright &copy; 2024</div>
</footer>
