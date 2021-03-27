<style>
	h1,h2, figure, p {
		text-align: center;
		margin: 20px auto;
		color: var(--text);
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {

	}
	h1 {
		color: var(--primary);
	}
	span {
		color: var(--primary);
	}
	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
	#rose {
		font-size: 1.5em;
	}
</style>

<svelte:head>
	<title>Alex Rose</title>
</svelte:head>

<h1> Hi. </h1>

<h2>
	My name is Alex <span id="rose">Rose.</span>
</h2>
<h2>
	I like <span style="color: var(--amethyst)"> Web Development</span>,  <span style="color: var(--tango)"> History</span>, <span style="color: var(--modified)"> Mural Art</span>, and <span style="color: var(--thunderbird)"> House Music</span>.
</h2>

<p> I'm a junior studying Computer Science and History at Loyola University Chicago.</p>

<p>I'm also a Mulcahy Fellow at the Software Systems Laboratory.</p>

<p>I used to work as a IT Technician for the Loyola Service Desk and now I'm looking for another job that's more about coding</p>

<p>Check out my portfolio, my stack, my bio/resume, or my blog if you want to stay awhile</p>
