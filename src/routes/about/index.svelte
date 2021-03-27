<script lang="ts">
	import dayjs from 'dayjs';

	import {events} from './events.json'
	import Timeline from "../../components/Timeline.svelte";

	export let isPast: boolean = false;

	const sortedFutureEvents = events["future"]
			.sort((a, b) => {
				if (a["date"] < b["date"]) return 1;
				else return -1;
			});
	const sortedPastEvents = events["past"]
			.sort((a, b) => {
				if (a["dateStart"] < b["dateStart"]) return 1;
				else return -1;
			});
	const sortedCurrentEvents = events["current"]
			.sort((a, b) => {
				if (a["date"] < b["date"]) return 1;
				else return -1;
			});
</script>

<style>
	h1,h2, figure, p {
		text-align: center;
		color: var(--text);
	}

	figure {
		margin: 0 0 1em 0;
	}

	h1,h2 {
		color: var(--primary);
	}
	span {
		color: var(--secondary);
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
	p {
		color: var(--text);
	}
</style>

<svelte:head>
	<title>Bio</title>
</svelte:head>

<h1>Brief Timeline</h1>
<Timeline/>

