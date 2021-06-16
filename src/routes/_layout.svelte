<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import {onMount} from "svelte";
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	export let segment: string;
	export let theme: string;
	const theme$ = writable(theme);
	$: $theme$ = theme

	setContext('theme', theme$)


	function sendTheme(themeGiven: string) {
		theme = themeGiven;
	}
	function handDownTheme(event: any) {
		sendTheme(event.detail.theme);
	}

	onMount(() => {
		if (document.body.classList.contains('bright')) {
			theme = 'bright';
		}
		else theme = 'dark';
	});
</script>

<style>
	main {
		position: relative;
		background-color: #8954DE;
		max-width: 100vw;
		min-height: 100vh;
		box-sizing: border-box;
	}
</style>

<Nav {segment} on:message={handDownTheme} />

<main>
	<slot/>
</main>
