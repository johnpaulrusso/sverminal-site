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

const READER_EXAMPLE = `\<script lang="ts"\>
    import { Sverminal, SverminalReader } from 'sverminal';

    let reader = new SverminalReader();

    async function processor(command: string): Promise<void> {
        // Example: any command will prompt the user for their name.
        let name = await reader.read("What is your name?");
    }
\</script\>

\<Sverminal {processor} {reader}/\>`;

    const AUTOCOMPLETE_EXAMPLE = `\<script lang="ts"\>
    import { Sverminal } from 'sverminal';

    let autoCompletes = ['add', 'subtract', 'multiply', 'divide'];

    async function processor(command: string): Promise<void> {
        //Your processing logic here;
    }
\</script\>

\<Sverminal {processor} {autoCompletes} on:get-current-command={getCurrentCommand}/\>`;

    const AUTOCOMPLETE_ADVANCED_EXAMPLE = `\<Sverminal {processor} {autoCompletes} on:get-current-command={getCurrentCommand}/\>`;
</script>



<svelte:head>
	{@html github}
</svelte:head>

<div class="flex h-full justify-center bg-gradient-to-tl from-gray-800 to-gray-700 p-4 text-white">
	<div class="container flex flex-col gap-8 md:flex-row">
		<!-- Sidebar with links to sections -->
		<aside class="md:sticky top-4 h-fit w-full rounded-lg bg-gray-700 p-4 shadow-lg md:w-1/4">
			<h2 class="mb-4 text-lg font-semibold">Documentation</h2>
			<ul class="space-y-2 text-sm font-medium">
                <li><a href="#overview" class="hover:text-purple-400">Overview</a></li>
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
            <section id="overview" class="mb-8">
                <h2 class="pb-4 text-2xl font-semibold">Overview</h2>
                <p class="pb-2">
                    Sverminal is a Svelte component library that provides a terminal or command line interface emulator to web application to run in the browser.
                </p>
            </section>
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
				<p class="pb-4">Some of your commands may require users to enter additional input. The SverminalReader class was created to accomplish this use case. Use it within the command handling function to await additional input from the user.</p>
				<!-- Reader details and code examples go here -->
                <InstructionStep title={'Example'} language="svelte" code={READER_EXAMPLE}>
					{#snippet instructions()}
						<p class="pb-2">
							Here is a minimal example of setting up a reader to request additional user input needed to process a command.
						</p>
					{/snippet}
				</InstructionStep>
			</section>

			<section id="autocomplete" class="mb-8">
				<h2 class="pb-4 text-2xl font-semibold">Using Autocomplete</h2>
				<p class="pb-4">
					To enable users to operate quickly and efficiently within user-defined terminal programs, Sverminal accepts a property called <span class="font-mono">autoCompletes</span>. This property accepts a list of strings that are potential autocomplete options that automatically populate onto the prompt when the user presses the TAB key. This property can be updated with different string lists as the user interacts with the terminal.
				</p>
				<!-- Autocomplete details and code examples go here -->
                <InstructionStep title={'Example'} language="svelte" code={AUTOCOMPLETE_EXAMPLE}>
					{#snippet instructions()}
						<p class="pb-2">
							Here is an example of what the autoCompletes property might be set to in a simple calculator program. Upon pressing the TAB key, the user can iterate through the commands based on existing characters already typed into the prompt.
						</p>
					{/snippet}
				</InstructionStep>
                <InstructionStep title={'Advanced'} language="svelte" code={AUTOCOMPLETE_ADVANCED_EXAMPLE}>
					{#snippet instructions()}
						<p class="pb-2">
							If you want to change the auto complete options dynamically while the user is entering a command, the component provides an event 'get-current-command'. This fires each time the user types something into the prompt and provides the active contents of the command so far.
						</p>
					{/snippet}
				</InstructionStep>
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
