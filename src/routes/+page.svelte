<script>
	import Logo from '$lib/components/Logo.svelte';
	import { HighlightSvelte, Highlight } from 'svelte-highlight';
	import github from 'svelte-highlight/styles/github-dark-dimmed';
	import bash from 'svelte-highlight/languages/bash';
	import typescript from 'svelte-highlight/languages/typescript';

	const importCode = `import \{ Sverminal \} from 'sverminal';`;

	const commandCode = `async function processor\(command: string\): Promise<void> \{
    // Your command processing logic here
\}`;

	const componentCode = `\<Sverminal {processor}\/\>`;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<div class="flex h-full justify-center p-4">
	<div class="container">
		<section class="flex flex-col items-center gap-8 py-8">
			<!--Logo/Title-->
			<div class="flex flex-col gap-4 text-white">
				<h1 class="gap1 flex items-center justify-around font-mono text-5xl font-bold md:text-7xl">
					<Logo styles="hidden sm:block" />
					<div>SVERMINAL</div>
					<Logo flip={true} styles="hidden sm:block" />
				</h1>
				<h3 class="text-center font-mono text-sm md:text-base">
					A Terminal and command line interface emulating Svelte component styled with Tailwind CSS.
				</h3>
			</div>

			<div class="flex items-center justify-center gap-4">
				<a
					href="#getting-started"
					class="highlight-white/20 flex h-12 w-auto items-center justify-center rounded-lg border-sky-500 bg-sky-500 px-6 font-semibold text-white hover:border-sky-400 hover:bg-sky-400"
					>Get Started!</a
				>
				<a
					href="/demo"
					class="flex h-12 w-auto items-center justify-center rounded-lg border-2 border-sky-500 px-6 text-sky-500 hover:border-sky-400 hover:bg-gray-100 hover:text-sky-400"
					>Live Demo</a
				>
			</div>

			<!--Demo-->
			<img class="rounded-md" src="/sverminalDemo2.gif" alt="Sverminal Demo GIF" />
		</section>
		<section
			id="getting-started"
			class="rounded-md bg-gradient-to-br from-gray-800 to-gray-700 p-4 text-white shadow-xl"
		>
			<h1 class="pb-4 pt-8 text-2xl font-semibold">Getting Started</h1>
			<p class="pb-6 text-sm">
				Integrating Sverminal into an existing Svelte project is pretty straightforward...
			</p>

			<h3 class="pb-2 pt-6 text-lg font-semibold">Step 1. Installation</h3>
			<p class="pb-2 text-sm">
				Install the latest <a class="text-purple-400" href="https://www.npmjs.com/package/sverminal"
					>npm</a
				> package of Sverminal.
			</p>
			<Highlight language={bash} code={`npm install sverminal`} class="py-4" />

			<h3 class="pb-2 pt-6 text-lg font-semibold">Step 2. Import the Sverminal Component</h3>
			<p class="pb-2 text-sm">
				After installation, import the Sverminal component into your Svelte project...
			</p>
			<HighlightSvelte code={importCode} class="py-4" />

			<h3 class="pb-2 pt-6 text-lg font-semibold">Step 3. Define a Command Handling Function</h3>
			<p class="pb-2 text-sm">
				Create a command handling function to manage commands entered in Sverminal...
			</p>
			<Highlight language={typescript} code={commandCode} class="py-4" />

			<h3 class="pb-2 pt-6 text-lg font-semibold">Step 4. Create the Sverminal Component</h3>
			<p class="pb-2 text-sm">Finally, add the Sverminal component to your app...</p>
			<HighlightSvelte code={componentCode} class="py-4" />

			<h3 class="pb-2 pt-6 text-lg font-semibold">Step 5. Explore the Documentation</h3>
			<p class="pb-2 text-sm">
				After integrating Sverminal into your app, explore the <a
					href="/documentation"
					class="text-purple-400">Documentation</a
				> to discover all the powerful features it offers, including writing to the terminal, requesting
				user input, autocomplete, and much more.
			</p>
		</section>
	</div>
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-gradient-to-tl;
		@apply from-gray-800;
		@apply to-gray-700;
	}

	:global(html) {
		@apply scroll-smooth;
	}
</style>
