<script lang="ts">
	import Timeline from "../../components/Timeline.svelte";
</script>

<style>
	h1,p {
		text-align: center;
		color: var(--text);
	}

	h1 {
		color: var(--primary);
	}
	p {
		color: var(--text);
	}
</style>

<svelte:head>
	<title>Bio</title>
</svelte:head>

<h1>Bio</h1>

<p> I'm a junior studying Computer Science and History at Loyola University Chicago.</p>

<p>I'm also a Mulcahy Fellow at the Software Systems Laboratory.</p>

<p>I used to work as a IT Technician for the Loyola Service Desk and now I'm looking for another job that's more about coding</p>

<p>Check out my portfolio, my stack, my bio/resume, or my blog if you want to stay awhile</p>


<h1>Brief Timeline</h1>
<Timeline/>

