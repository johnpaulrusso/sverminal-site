<script>
	import InstructionStep from '$lib/components/InstructionStep.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import github from 'svelte-highlight/styles/github-dark-dimmed';

	const importCode = `import \{ Sverminal \} from 'sverminal';`;

	const commandCode = `async function processor\(command: string\): Promise<void> \{
    // Your command processing logic here
\}`;

	const componentCode = `\<Sverminal {processor}\/\>`;

	const tailwindCode = `export default {
	content: [
        './src/**/*.{html,js,svelte,ts}', 
        './node_modules/sverminal/**/*.{html,svelte,js,ts}'
    ],
}
`;
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
			<p class="pb-6">
				Integrating Sverminal into an existing Svelte project is pretty straightforward...
			</p>

			<InstructionStep
				title={'Step 1. Installation'}
				language="bash"
				code={'npm install sverminal'}
			>
				{#snippet instructions()}
					<p class="pb-2">
						Install the latest <a
							class="text-purple-400"
							href="https://www.npmjs.com/package/sverminal">npm</a
						> package of Sverminal.
					</p>
				{/snippet}
			</InstructionStep>

			<InstructionStep
				title={'Step 2. Import the Sverminal Component'}
				language="svelte"
				code={importCode}
			>
				{#snippet instructions()}
					<p class="pb-2">
						After installation, import the Sverminal component into your Svelte project...
					</p>
				{/snippet}
			</InstructionStep>

			<InstructionStep
				title={'Step 3. Define a Command Handling Function'}
				language="typescript"
				code={commandCode}
			>
				{#snippet instructions()}
					<p class="pb-2">
						Create a command handling function to manage commands entered in Sverminal...
					</p>
				{/snippet}
			</InstructionStep>

			<InstructionStep
				title={'Step 4. Create the Sverminal Component'}
				language="svelte"
				code={componentCode}
			>
				{#snippet instructions()}
					<p class="pb-2">Add the Sverminal component to your app...</p>
				{/snippet}
			</InstructionStep>

			<InstructionStep
				title={'Step 5. Update your Tailwind Configuration'}
				language="javascript"
				code={tailwindCode}
			>
				{#snippet instructions()}
					<p class="pb-2">
						Finally, to correctly render the tailwind styles used by the Sverminal component, you
						must add the install location to your Tailwind configuration like below...
					</p>
				{/snippet}
			</InstructionStep>

			<InstructionStep title={'Step 6. Explore the Documentation'}>
				{#snippet instructions()}
					<p class="pb-2">
						After integrating Sverminal into your app, explore the <a
							href="/documentation"
							class="text-purple-400">Documentation</a
						> to discover all the powerful features it offers, including writing to the terminal, requesting
						user input, autocomplete, and much more.
					</p>
				{/snippet}
			</InstructionStep>
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
