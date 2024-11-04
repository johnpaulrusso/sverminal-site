<script lang="ts">
	import { HighlightSvelte, Highlight } from 'svelte-highlight';
	import bash from 'svelte-highlight/languages/bash';
	import typescript from 'svelte-highlight/languages/typescript';
	import javascript from 'svelte-highlight/languages/javascript';
	import { type Snippet } from 'svelte';

	const LANG_SVELTE = 'svelte';
	const LANG_BASH = 'bash';
	const LANG_TYPESCRIPT = 'typescript';
	const LANG_JAVASCRIPT = 'javascript';

	let {
		title,
		instructions,
		language = '',
		code = ''
	}: { title: string; instructions: Snippet; language?: string; code?: string } = $props();
</script>

<h3 class="pb-2 pt-6 text-lg font-semibold">{title}</h3>
<div class="pb-2">
	{@render instructions()}
</div>
{#if code && language == LANG_SVELTE}
	<HighlightSvelte {code} class="py-4" />
{:else if code && language == LANG_BASH}
	<Highlight language={bash} {code} class="py-4" />
{:else if code && language == LANG_TYPESCRIPT}
	<Highlight language={typescript} {code} class="py-4" />
{:else if code && language == LANG_JAVASCRIPT}
	<Highlight language={javascript} {code} class="py-4" />
{/if}
