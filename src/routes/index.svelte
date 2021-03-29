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
	h3 {
		text-align: center;
		color: var(--text)
	}
	a {
		color: var(--secondary);
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
	I like <span style="color: var(--amethyst)"> Web Development</span>, <span style="color: var(--modified)"> Mural Art</span>, and <span style="color: var(--thunderbird)"> House Music</span>.
</h2>

<h3>
	Check out my <a href="/projects">projects</a>, <a href="/stacks">my skills/stack</a>, and if you want, <a href="/blog">my writings.</a>
<!--	<a href="/art">or look at some cool artwork</a>.-->
</h3>

<StackRoll/>
<ProjectRoll/>

