<script lang="ts">
	import '../../app.css';
	import { Sverminal } from 'sverminal';
	import { SverminalResponseTarget, SverminalWriter } from 'sverminal';
	import customConfig from '$lib/demoConfig.js';
	import { SverminalReader } from 'sverminal';

	const COMMANDS = [
		'echo',
		'warn',
		'error',
		'info',
		'countdown',
		'freeform-demo',
		'input-demo',
		'split-demo'
	];

	let sverminalReader = new SverminalReader();
	let sverminalWriter = new SverminalWriter();
	let showSplit: boolean = false;
	let autoCompletes = COMMANDS;

	function echo(args: string[]) {
		if (args.length == 0) {
			sverminalWriter.error('echo requires at least one argument. Usage: echo message');
		} else {
			const message = args.join(' ');
			sverminalWriter.echo(message);
		}
	}

	function warn(args: string[]) {
		if (args.length == 0) {
			sverminalWriter.error('warn requires at least one argument. Usage: warn message');
		} else {
			const message = args.join(' ');
			sverminalWriter.warn(message);
		}
	}

	function error(args: string[]) {
		if (args.length == 0) {
			sverminalWriter.error('error requires at least one argument. Usage: error message');
		} else {
			const message = args.join(' ');
			sverminalWriter.error(message);
		}
	}

	function info(args: string[]) {
		if (args.length == 0) {
			sverminalWriter.error('info requires at least one argument. Usage: info <message>');
		} else {
			const message = args.join(' ');
			sverminalWriter.info(message);
		}
	}

	function printStylesExample() {
		sverminalWriter.write('Check out the source code on ', ['text-cyan-500']);
		sverminalWriter.writeLink(
			'Github!',
			'https://github.com/johnpaulrusso/sverminal?tab=readme-ov-file#readme',
			['text-purple-500', 'underline']
		);
		sverminalWriter.write(' Contributors welcome!', ['text-cyan-500']);
		sverminalWriter.write('\n|-----------------------------|');
		sverminalWriter.write('\n');
		sverminalWriter.write('|     ');
		sverminalWriter.write(` Red  `, ['text-red-500']);
		sverminalWriter.write(' ');
		sverminalWriter.write(`Green `, ['text-green-500']);
		sverminalWriter.write(' ');
		sverminalWriter.write(` Blue`, ['text-blue-500']);
		sverminalWriter.write('     |');
		sverminalWriter.write('\n');
		sverminalWriter.write('|-----------------------------|');
	}

	const delay = (delayInms: number) => {
		return new Promise((resolve) => setTimeout(resolve, delayInms));
	};

	async function countdown(args: string[]) {
		if (args.length != 1) {
			sverminalWriter.error(
				'countdown requires a positive integer argument between and including 1 and 99. Usage: countdown number'
			);
			return;
		}

		const arg = args[0];
		const regex = /^\s*[0-9]{1,2}\s*$/;
		if (!regex.test(arg)) {
			sverminalWriter.error(
				'countdown requires a positive integer argument between and including 1 and 99. Usage: countdown number'
			);
			return;
		}

		const start = parseInt(arg[0]);
		if (start < 1 || 99 < start) {
			sverminalWriter.error(
				'countdown requires a positive integer argument between and including 1 and 99. Usage: countdown number'
			);
			return;
		}

		for (let i = start; i > 0; --i) {
			sverminalWriter.echo(`countdown: ${i}`);
			await delay(1000);
		}
	}

	async function runInputDemo() {
		sverminalWriter.echo('Please answer the following questions:');

		let name = await sverminalReader.read('What is your name?');
		let quest = await sverminalReader.read('What is your quest?');
		let color = await sverminalReader.read('What is your favorite color?');
        
		sverminalWriter.echo(`Your answers: ${name}, ${quest}, ${color}`);
	}

	async function runSplitDemo(args: string[]) {
		const welcome: string = `Welcome to the split demo! Use the divider to adjust the height of each split. 

    Options:
        -q - close the split view.
        -w - write text to the split view.
        -c - clear all text content in the split view.

`;

		if (args.length < 1 && !showSplit) {
			sverminalWriter.info(welcome, SverminalResponseTarget.SPLIT);
			showSplit = true;
			return;
		} else if (args.length < 1) {
			sverminalWriter.error(
				`split-demo takes at least one option:
    -q - close the split view.
    -w - write text to the split view.
    -c - clear all text content in the split view.`
			);
			return;
		}

		const supportedOptions = ['-q', '-w', '-c'];
		if (args.length > 0 && supportedOptions.findIndex((o) => o === args[0]) === -1) {
			sverminalWriter.error('split-demo: unsupported option');
			console.log(args[0]);
			return;
		}

		const option = args[0];
		if (option === '-q') {
			if (showSplit) {
				sverminalWriter.clear(SverminalResponseTarget.SPLIT);
			}
			showSplit = false;
		} else if (option === '-w') {
			if (args.length < 2) {
				sverminalWriter.error(
					"split-demo: the -w options requires a message be provided as the second argument. Ex: split-demo -w 'hello world'"
				);
			}
			console.log(args[1]);
			sverminalWriter.echo(args[1], SverminalResponseTarget.SPLIT);
		} else if (option === '-c') {
			sverminalWriter.clear(SverminalResponseTarget.SPLIT);
		} else {
			sverminalWriter.error('split-demo: unsupported option');
		}
	}

	function getCurrentCommand(event: CustomEvent) {
		const command = event.detail;
		const commandParts: string[] = command.split(' ');

		if (commandParts.length > 0 && COMMANDS.findIndex((c) => c === commandParts[0]) != -1) {
			autoCompletes = [];
		} else {
			autoCompletes = COMMANDS;
		}
	}

	async function processCommand(command: string): Promise<void> {
		// Your command processing logic here
		console.log('Processing command from parent component:', command);

		//First we should break the command up into pieces.
		const commandParts: string[] = command.split(' ');

		if (commandParts.length == 0) {
			return;
		}

		const method = commandParts.at(0);
		const args = commandParts.length > 0 ? commandParts.slice(1) : [];

		if (method === 'help') {
			sverminalWriter.info('TODO - Implement the help command!');
		} else if (method === 'echo') {
			echo(args);
		} else if (method === 'warn') {
			warn(args);
		} else if (method === 'error') {
			error(args);
		} else if (method === 'info') {
			info(args);
		} else if (method === 'countdown') {
			await countdown(args);
		} else if (method === 'freeform-demo') {
			printStylesExample();
		} else if (method === 'input-demo') {
			await runInputDemo();
		} else if (method === 'split-demo') {
			await runSplitDemo(args);
		} else {
			sverminalWriter.error(`${method} is not recognized as a valid command.`);
		}
	}
</script>

<div class="flex w-full justify-center bg-gradient-to-br from-gray-700 to-gray-800">
	<div class="container flex w-full flex-col items-center justify-center">
		<h1 class="w-full px-4 pb-4 pt-8 text-left text-xl font-semibold text-gray-100">
			Welcome to the Sverminal Live Demo!
		</h1>
		<h3 class="w-full px-4 pb-8 pt-0 text-left text-gray-100">
			Please refer to the table below for usage.
		</h3>

		<div class="h-96 w-full overflow-auto p-4">
			<Sverminal
				processor={processCommand}
				reader={sverminalReader}
				writer={sverminalWriter}
				promptPrefix="sverminal"
				config={customConfig}
				enableUI={showSplit}
				{autoCompletes}
				on:get-current-command={getCurrentCommand}
			/>
		</div>
		<div class="w-full p-4 px-4 pb-16 text-left text-gray-100">
			<h3 class="py-4 text-xl font-semibold">Controls & Demo Commands</h3>
			<div class="overflow-hidden rounded-md border border-gray-700 shadow-lg">
				<table class="min-w-fulltext-sm bg-gray-900 text-gray-400 md:text-base">
					<tbody>
						<tr class="w-full bg-gray-950">
							<th class="border-b px-4 py-2 text-left font-semibold text-gray-200">Command/Input</th
							>
							<th class="border-b px-4 py-2 text-left font-semibold text-gray-200">Arguments</th>
							<th class="border-b px-4 py-2 text-left font-semibold text-gray-200">Description</th>
						</tr>
						<tr>
							<td class="border-b border-gray-700 px-4 py-2">Enter key</td>
							<td class="border-b border-gray-700 px-4 py-2">N/A</td>
							<td class="border-b border-gray-700 px-4 py-2">Submit current command or input.</td>
						</tr>
						<tr>
							<td class="border-b border-gray-700 px-4 py-2">Up/Down arrows keys</td>
							<td class="border-b border-gray-700 px-4 py-2">N/A</td>
							<td class="border-b border-gray-700 px-4 py-2">Navigate command history.</td>
						</tr>
						<tr>
							<td class="border-b border-gray-700 px-4 py-2">Tab key</td>
							<td class="border-b border-gray-700 px-4 py-2">N/A</td>
							<td class="border-b border-gray-700 px-4 py-2"
								>Auto-complete. In this demo, autocomplete supports the list of commands below. For
								example, typing 'f' and then hitting the tab key would result in an auto-completion
								of 'freeform-demo'.</td
							>
						</tr>
						<tr>
							<td class="border-b border-gray-700 px-4 py-2">echo</td>
							<td class="border-b border-gray-700 px-4 py-2">message &lt;string&gt;</td>
							<td class="border-b border-gray-700 px-4 py-2"
								>Prints the message back to the terminal.</td
							>
						</tr>
						<tr>
							<td class="border-b border-gray-700 px-4 py-2">warn</td>
							<td class="border-b border-gray-700 px-4 py-2">message &lt;string&gt;</td>
							<td class="border-b border-gray-700 px-4 py-2"
								>Prints a warning message back to the terminal.</td
							>
						</tr>
						<tr>
							<td class="border-b border-gray-700 px-4 py-2">error</td>
							<td class="border-b border-gray-700 px-4 py-2">message &lt;string&gt;</td>
							<td class="border-b border-gray-700 px-4 py-2"
								>Prints an error message back to the terminal.</td
							>
						</tr>
						<tr>
							<td class="border-b border-gray-700 px-4 py-2">info</td>
							<td class="border-b border-gray-700 px-4 py-2">message &lt;string&gt;</td>
							<td class="border-b border-gray-700 px-4 py-2"
								>Prints an info message back to the terminal.</td
							>
						</tr>
						<tr>
							<td class="border-b border-gray-700 px-4 py-2">countdown</td>
							<td class="border-b border-gray-700 px-4 py-2">1-99 &lt;number&gt;</td>
							<td class="border-b border-gray-700 px-4 py-2"
								>Counts down from the provided number every seconds and prints the value to the
								terminal.</td
							>
						</tr>
						<tr>
							<td class="border-b border-gray-700 px-4 py-2">freeform-demo</td>
							<td class="border-b border-gray-700 px-4 py-2">None</td>
							<td class="border-b border-gray-700 px-4 py-2"
								>Prints out block of text that demostrates the ability to mix styles.</td
							>
						</tr>
						<tr>
							<td class="border-b border-gray-700 px-4 py-2">input-demo</td>
							<td class="border-b border-gray-700 px-4 py-2">None</td>
							<td class="border-b border-gray-700 px-4 py-2"
								>Demonstrates the ability to request additional user input while processing a
								command.</td
							>
						</tr>
						<tr>
							<td class="border-b border-gray-700 px-4 py-2">split-demo</td>
							<td class="border-b border-gray-700 px-4 py-2">Run command for argument list.</td>
							<td class="border-b border-gray-700 px-4 py-2"
								>Demonstrates the ability to split the terminal vertically. The vertical view can be
								used to display additional information to the user.</td
							>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
