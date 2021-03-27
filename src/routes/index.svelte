<script>
	import StackRoll from "../components/StackRoll.svelte";
	import ProjectRoll from "../components/ProjectRoll.svelte";
</script>


<style>
	h1,h2  {
		text-align: center;
		margin: 20px auto;
		color: var(--text);
	}
	img {
		margin: 0 auto;
		height: 200px;
		display: block;
	}
	h1 {
		color: var(--primary);
	}
	span {
		color: var(--primary);
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Alex Rose</title>
</svelte:head>

<h1> Hi. </h1>

<img src="content/alex.png" alt="Alex">

<h2>
	My name is Alex <span id="rose">Rose.</span> I live in <span style="color: #5fa8cd">Chicago</span>.
</h2>
<h2>
	I like <span style="color: var(--amethyst)"> Web Development</span>,  <span style="color: var(--tango)"> History</span>, <span style="color: var(--modified)"> Mural Art</span>, and <span style="color: var(--thunderbird)"> House Music</span>.
</h2>

<StackRoll/>
<ProjectRoll/>

