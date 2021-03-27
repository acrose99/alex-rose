<script lang="ts">
	import logoBright from 'images/BrightRose.svg';
	import logoDark from 'images/DarkRose.svg';
	import DarkModeButton from "./DarkModeButton.svelte";

	export let segment: string;
	let src: string;


	function changeLogo(theme: string) {
		if (theme === 'dark') {
			src = logoDark;
		} else if (theme === 'bright') {
			src = logoBright;
		}
	}
	function handleThemeChange(event: any) {
		console.log(typeof event);
		changeLogo(event.detail.theme);
	}
</script>
<nav>
	<!--{#if document.body.classList.contains('bright')}-->
	<!--	<img src="content/BrightRose.svg" alt="">-->
	<!--	{:else if document.body.classList.contains('dark')}-->
	<!--		<img src="content/BrightDark.svg" alt="">-->
	<!--	{:else }-->
	<!--		<img src="content/BrightRose.svg" alt="">-->
	<!--{/if}-->
	<img {src} alt="">
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Blog</a></li>
		<li><a rel=prefetch aria-current="{segment === 'stack' ? 'page' : undefined}" href="stacks">Stack</a></li>
		<DarkModeButton on:message={handleThemeChange}/>
	</ul>
</nav>
<style>
	nav {
		border-bottom: 1px solid var(--border);
		background: var(--background-item);
		font-weight: 300;
		padding: 0 1em;
		display: block;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	img {
		margin: 10px 25px;
		height: 32px;
		display: block;
		float: left;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - .75em);
		height: 2px;
		background-color: var(--primary);
		display: block;
		bottom: -1px;
	}

	a {
		color: var(--secondary-text);
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

