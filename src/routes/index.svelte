<script>
	import StackRoll from "../components/StackComponents/StackRoll.svelte";
	import ProjectRoll from "../components/ProjectComponents/ProjectRoll.svelte";
	import Me from "../components/Me.svelte";
	import { getContext } from 'svelte'

	const theme$ = getContext('theme')

	$: theme = $theme$

</script>


<style>
	h1,h2  {
		text-align: center;
		margin: 20px auto;
		color: var(--text);
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
	@keyframes waves {
		0% {
			transform: translate3d(0, 10PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)
		}
		100% {
			transform: translate3d(0, -10PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
		}
	}
	.wavesContainer {
		display: block;
		overflow: hidden;
	}
	.wavesText {
		animation: waves 2s ease-in-out infinite alternate 0.05s;
	}
	.waves {
		height: 30vh;
		width: 115vw;
		position: relative;
		right: 10vw;
		animation: waves 2s ease-in-out infinite alternate 0.05s;
	}
</style>

<svelte:head>
	<title>Alex Rose</title>
</svelte:head>


<div class="wavesContainer">
	<img class="waves" src="Waves2.svg" alt="Waves"/>
</div>
<h1> Hi. </h1>

<Me theme={theme}/>
<h2 class="wavesText">
	My name is Alex <span id="rose">Rose.</span> I live in <span style="color: #5fa8cd">Chicago</span>.
</h2>
<h2 class="wavesText">
	I like <span style="color: var(--amethyst)"> Web Development</span>, <span style="color: var(--modified)"> Mural Art</span>, and <span style="color: var(--thunderbird)"> House Music</span>.
</h2>

<h3 class="wavesText">
	Check out my <a href="/projects">projects</a>, <a href="/stacks">my skills/stack</a>, and if you want, <a href="/blog">my writings,</a>
	<a href="/art">or some some cool artwork</a>.
</h3>

<div  class="wavesContainer">
	<img class="waves" src="Waves.svg" alt="Waves"/>
</div>

<!--<StackRoll/>-->
<!--<ProjectRoll/>-->

