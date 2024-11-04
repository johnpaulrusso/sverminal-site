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
				<p class="pb-4 text-sm">
					Follow these steps to install Sverminal in your Svelte project...
				</p>
			</section>

			<section id="configuration" class="mb-8">
				<h2 class="pb-4 text-2xl font-semibold">Configuration</h2>
				<p class="pb-4 text-sm">
					Learn how to configure Sverminal with options suited for your needs...
				</p>
				<!-- Configuration details and code examples go here -->
			</section>

			<section id="writer" class="mb-8">
				<h2 class="pb-4 text-2xl font-semibold">Using the Writer</h2>
				<p class="pb-4 text-sm">Discover how to write output to the terminal...</p>
				<!-- Writer details and code examples go here -->
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
