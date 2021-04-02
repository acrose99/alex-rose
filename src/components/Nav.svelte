<script lang="ts">
	import logoBright from 'images/BrightRose.svg';
	import logoDark from 'images/DarkRose.svg';
	import DarkModeButton from "./DarkModeButton.svelte";
	import DiGithubAlt from 'svelte-icons/di/DiGithubAlt.svelte'

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();


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
		// console.log(typeof event);
		changeLogo(event.detail.theme);
		// handDownTheme(event.detail.theme);
		dispatch('message', {
			theme: event.detail.theme,
		});
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
		<li><a class="link" aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li><a class="link" aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a class="link" rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Blog</a></li>
		<li><a class="link" rel=prefetch aria-current="{segment === 'stacks' ? 'page' : undefined}" href="stacks">Stack/Skills</a></li>
		<li><a class="link" rel=prefetch aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">Projects</a></li>
		<li><a class="link" rel=prefetch aria-current="{segment === 'projects' ? 'page' : undefined}" href="art">Art</a></li>
	</ul>
	<DarkModeButton on:message={handleThemeChange}/>
	<div class="linkImg">
		<a style="color: var(--text)" href="https://github.com/acrose99/alex-rose"><DiGithubAlt/></a>
	</div>
</nav>
<style>
	nav {
		border-bottom: 1px solid var(--border);
		background: var(--background-item);
		font-weight: 300;
		padding: 0 1em;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul {
		margin: 0;
		padding: 0;
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
		display: block;
	}

	li a:hover {
		background: var(--primary);
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		display: block;
		bottom: -1px;
	}

	a {
		cursor: pointer;
	}

	a.link {
		text-decoration: none;
		padding: 1em 0.5em;
		margin: 0 1em;
		display: block;
		color: var(--text);
	}

	img {
		height: 1.5em;
		width: 1.5em;
		margin-left: 1em;
	}

	.linkImg {
		height: 2.5em;
		width: 2.5em;
		margin-left: 1em;
	}
	.linkImg:hover {
		background: var(--primary);
	}
	@media screen and (max-width: 360px) {
		a.link {
			font-size: 12px;
			padding: .15em .15em;
			margin: 0 0.125em;
		}

		img {
			height: 1.25em;
			width: 1.25em;
			margin-left: 0.5em;
			display: none;
		}
		.linkImg {
			display: none;
		}
	}
	@media screen and (max-width: 600px) and (min-width: 375px) {
		a.link {
			font-size: .9em;
			padding: .15em .15em;
			margin: 0 0.125em;
		}

		img {
			height: 1.25em;
			width: 1.25em;
			margin-left: 0.5em;
			display: none;
		}
		.linkImg {
			display: none;
		}
	}
</style>

