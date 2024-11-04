<div class="flex h-full justify-center p-4 bg-gradient-to-tl from-gray-800 to-gray-700 text-white">
    <div class="container flex flex-col md:flex-row gap-8">
        <!-- Sidebar with links to sections -->
        <aside class="w-full md:w-1/4 bg-gray-700 p-4 rounded-lg shadow-lg sticky top-4 h-fit">
            <h2 class="text-lg font-semibold mb-4">Documentation</h2>
            <ul class="space-y-2 text-sm font-medium">
                <li><a href="#installation" class="hover:text-purple-400">Installation</a></li>
                <li><a href="#configuration" class="hover:text-purple-400">Configuration</a></li>
                <li><a href="#writer" class="hover:text-purple-400">Using the Writer</a></li>
                <li><a href="#reader" class="hover:text-purple-400">Using the Reader</a></li>
                <li><a href="#autocomplete" class="hover:text-purple-400">Using Autocomplete</a></li>
            </ul>
        </aside>

        <!-- Main documentation content -->
        <div class="w-full md:w-3/4 bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg shadow-xl">
            <div class="search-bar mb-6">
                <input type="text" placeholder="Search documentation..." class="w-full p-2 bg-gray-600 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400" />
            </div>

            <!-- Documentation Sections -->
            <section id="installation" class="mb-8">
                <h2 class="text-2xl font-semibold pb-4">Installation</h2>
                <p class="pb-4 text-sm">
                    Follow these steps to install Sverminal in your Svelte project...
                </p>
                
            </section>

            <section id="configuration" class="mb-8">
                <h2 class="text-2xl font-semibold pb-4">Configuration</h2>
                <p class="pb-4 text-sm">
                    Learn how to configure Sverminal with options suited for your needs...
                </p>
                <!-- Configuration details and code examples go here -->
            </section>

            <section id="writer" class="mb-8">
                <h2 class="text-2xl font-semibold pb-4">Using the Writer</h2>
                <p class="pb-4 text-sm">
                    Discover how to write output to the terminal...
                </p>
                <!-- Writer details and code examples go here -->
            </section>

            <section id="reader" class="mb-8">
                <h2 class="text-2xl font-semibold pb-4">Using the Reader</h2>
                <p class="pb-4 text-sm">
                    Learn to capture user input and process commands...
                </p>
                <!-- Reader details and code examples go here -->
            </section>

            <section id="autocomplete" class="mb-8">
                <h2 class="text-2xl font-semibold pb-4">Using Autocomplete</h2>
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