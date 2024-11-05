<script>
	import InstructionStep from '$lib/components/InstructionStep.svelte';
	import github from 'svelte-highlight/styles/github-dark-dimmed';

	const TAILWIND_CONFIG_EXAMPLE = `export default {
	content: [
        './src/**/*.{html,js,svelte,ts}', 
        './node_modules/sverminal/**/*.{html,svelte,js,ts}'
    ],
}`;

	const STYLE_CONFIG_EXAMPLE = `const myConfiguration = {
    style: {
		prompt: ['text-emerald-400'], //Ex: 'sverminal>'
		command: ['text-violet-400'], //The first word of user input
		flags: ['text-slate-400'], //Arguments prefixed with '-'
		info: ['text-cyan-400'],
		error: ['text-red-400'],
		warn: ['text-yellow-400'], 
		text: ['text-slate-50'] //Everything else...
	}
}
`;

	const HISTORY_CONFIGURATION_EXAMPLE = `const myConfiguration = {
	history: {
		enabled: true,
		method: 'memory', //memory (default), sessionstorage, localstorage
		limit: 10
	},
}
`;

	const MISC_CONFIGURATION_EXAMPLE = `const myConfiguration = {
    promptSuffix: '>', //The characters to place at the end of the prompt.
	newlineBetweenCommands: false, //If set to true, an extra line will be appended after submitting a command.
	quoteMultiWordAutoCompletes: true //Optionally wrap multi-word auto-completes with quotes.
}
`;

	const WRITER_API_EXAMPLE = `writer.echo('Echo some text');
writer.warn('Print a warning');
writer.error('Print an error');
writer.info('Print some information')
writer.write('This text will be inline and green.', ['text-green-500']);
writer.writeLink('Sverminal!', 'https://sverminal.io', ['text-purple-500']);
writer.clear() //Clears all terminal content.
`;

	const WRITER_EXAMPLE = `
\<script lang="ts"\>
	import { Sverminal, SverminalWriter } from 'sverminal';

	let writer = new SverminalWriter();

	async function processor(command: string): Promise<void> {
		// Example: echo the command back to the terminal.
		writer.echo(command);
	}
\</script\>

\<Sverminal {processor} {writer}/\>
`;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<div class="flex h-full justify-center bg-gradient-to-tl from-gray-800 to-gray-700 p-4 text-white">
	<div class="container flex flex-col gap-8 md:flex-row">
		<!-- Sidebar with links to sections -->
		<aside class="sticky top-4 h-fit w-full rounded-lg bg-gray-700 p-4 shadow-lg md:w-1/4">
			<h2 class="mb-4 text-lg font-semibold">Documentation</h2>
			<ul class="space-y-2 text-sm font-medium">
				<li><a href="#installation" class="hover:text-purple-400">Installation</a></li>
				<li><a href="#configuration" class="hover:text-purple-400">Configuration</a></li>
				<li><a href="#writer" class="hover:text-purple-400">Using the Writer</a></li>
				<li><a href="#reader" class="hover:text-purple-400">Using the Reader</a></li>
				<li><a href="#autocomplete" class="hover:text-purple-400">Using Autocomplete</a></li>
			</ul>
		</aside>

		<!-- Main documentation content -->
		<div
			class="w-full rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-xl md:w-3/4"
		>
			<div class="search-bar mb-6">
				<input
					type="text"
					placeholder="Search documentation..."
					class="w-full rounded bg-gray-600 p-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
				/>
			</div>

			<!-- Documentation Sections -->
			<section id="installation" class="mb-8">
				<h2 class="pb-4 text-2xl font-semibold">Installation</h2>
				<InstructionStep title={'Installation'} language="bash" code={'npm install sverminal'}>
					{#snippet instructions()}
						<p class="pb-2">
							Install the latest <a
								class="text-purple-400"
								href="https://www.npmjs.com/package/sverminal">npm</a
							> package of Sverminal.
						</p>
					{/snippet}
				</InstructionStep>
				<InstructionStep title={'Tailwind'} language="javascript" code={TAILWIND_CONFIG_EXAMPLE}>
					{#snippet instructions()}
						<p class="pb-2">
							To correctly render the tailwind styles used by the Sverminal component, you must add
							the install location to your Tailwind configuration like below.
						</p>
					{/snippet}
				</InstructionStep>
			</section>

			<section id="configuration" class="mb-8">
				<h2 class="pb-4 text-2xl font-semibold">Configuration</h2>
				<p class="pb-4">
					Consumers of the Sverminal component can optionally provide a custom configuration. All
					properties are optional and if omitted will fallback to defaults values. For convenience,
					all examples below showcase the default values.
				</p>
				<!-- Configuration details and code examples go here -->
				<InstructionStep title={'Styles'} language="javascript" code={STYLE_CONFIG_EXAMPLE}>
					{#snippet instructions()}
						<p class="pb-2">
							Each property in the style object accepts a list of CSS classes that will be applied
							to the relevant text elements.
						</p>
					{/snippet}
				</InstructionStep>
				<InstructionStep
					title={'Command History'}
					language="javascript"
					code={HISTORY_CONFIGURATION_EXAMPLE}
				>
					{#snippet instructions()}
						<p class="pb-2">
							By default Sverminal will keep track of a users command history in memory. This can be
							disabled or further configured within a custom configuration. The limit property puts
							a cap on the number of unique commands tracked in the specified history method. When
							the cap is reached, newer commands will replace the oldest commands in history.
						</p>
					{/snippet}
				</InstructionStep>
				<InstructionStep title={'Misc'} language="javascript" code={MISC_CONFIGURATION_EXAMPLE}>
					{#snippet instructions()}
						<p class="pb-2">
							Here are some additional configuration options that you find useful...
						</p>
					{/snippet}
				</InstructionStep>
			</section>

			<section id="writer" class="mb-8">
				<h2 class="pb-4 text-2xl font-semibold">Using the Writer</h2>
				<p class="pb-4">The SverminalWriter class provides library users with the ability to write content back to the terminal. This could be for used for anything from simply printing error messages to the user when a command fails or developing a complex text-based user interface.</p>
				<!-- Writer details and code examples go here -->
				<InstructionStep title={'API'} language="javascript" code={WRITER_API_EXAMPLE}>
					{#snippet instructions()}
						<p class="pb-2">
							The writer API is pretty simple. The echo, error, warn, and info functions writer
							their respective output to the terminal as independent lines or block display. The
							write and writeLink functions writer their output inline which provides the client
							more flexibility when it is desired to output more complex content.
						</p>
					{/snippet}
				</InstructionStep>
				<InstructionStep title={'Example'} language="svelte" code={WRITER_EXAMPLE}>
					{#snippet instructions()}
						<p class="pb-2">
							Here is a minimal example of setting up a writer to simply echo the command back to
							the user.
						</p>
					{/snippet}
				</InstructionStep>
			</section>

			<section id="reader" class="mb-8">
				<h2 class="pb-4 text-2xl font-semibold">Using the Reader</h2>
				<p class="pb-4 text-sm">Learn to capture user input and process commands...</p>
				<!-- Reader details and code examples go here -->
			</section>

			<section id="autocomplete" class="mb-8">
				<h2 class="pb-4 text-2xl font-semibold">Using Autocomplete</h2>
				<p class="pb-4 text-sm">
					Set up autocomplete suggestions for a smoother command-line experience...
				</p>
				<!-- Autocomplete details and code examples go here -->
			</section>
		</div>
	</div>
</div>

<style lang="postcss">
	/* Add smooth scrolling for anchor links */
	:global(html) {
		@apply scroll-smooth;
	}
</style>
