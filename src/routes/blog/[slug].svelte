<script context="module" lang="ts">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script lang="ts">
	export let post: { slug: string; title: string, html: any };
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h1), .content :global(h2) {
		color: var(--primary);
	}
	.content :global(h3), .content :global(h4) {
		color: var(--secondary);
	}
	.content :global(p) {
		color: var(--text)
	}
	.content :global(li) {
		color: var(--amethyst)
	}
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}
	.content :global(img) {
		max-width: 700px;
		max-height: 700px;
	}

	.content :global(pre) {
		background-color: var(--background);
		box-shadow: inset 1px 1px 5px var(--shadow);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}
	.content :global(code) {
		color: var(--primary-hover);
	}


	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>


<div class="content">
	<h1>{post.title}</h1>
	{@html post.html}
</div>
