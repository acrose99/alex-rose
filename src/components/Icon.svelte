<!--Catch all Component for any icon, uses svelte icons as a dependency, and SVGBase, a custom component of mine. -->
<script lang="ts">
    // import IoIosSunny from 'svelte-icons/io/IoIosSunny.svelte';
    // import IoIosMoon from 'svelte-icons/io/IoIosMoon.svelte';
    import IoIosArrowDroprightCircle from 'svelte-icons/io/IoIosArrowDroprightCircle.svelte'
    import DiJavascript1 from 'svelte-icons/di/DiJavascript1.svelte'
    import DiMongodb from 'svelte-icons/di/DiMongodb.svelte'
    import DiNodejsSmall from 'svelte-icons/di/DiNodejsSmall.svelte'
    import DiReact from 'svelte-icons/di/DiReact.svelte'
    import DiCss3 from 'svelte-icons/di/DiCss3.svelte'
    import DiTerminal from 'svelte-icons/di/DiTerminal.svelte'
    import DiPython from 'svelte-icons/di/DiPython.svelte'
    import FaFigma from 'svelte-icons/fa/FaFigma.svelte'

    import WiSunrise from 'svelte-icons/wi/WiSunrise.svelte'
    import WiMoonset from 'svelte-icons/wi/WiMoonset.svelte'

    import PrettilierSVG from "./SVGS/PrettilierSVG.svelte";
    import FoodspectorSVG from "./SVGS/FoodspectorSVG.svelte";
    import SvelteSVG from "./SVGS/SvelteSVG.svelte";
    import HistoryOfComputingSVG from "./SVGS/HistoryOfComputingSVG.svelte";
    import DPSVG from "./SVGS/DPSVG.svelte"
    export let icon: string;export let style: string; export let title: string;

</script>

<!--Developer ICONS!-->
{#if icon === 'React'}
    <div class="iconify">
        <DiReact/>
    </div>
{:else if icon === 'Javascript'}
    <div class="iconify">
        <DiJavascript1/>
    </div>
{:else if icon === 'MongoDB'}
    <div class="iconify">
        <DiMongodb/>
    </div>
{:else if icon === 'Node'}
    <div class="iconify">
        <DiNodejsSmall/>
    </div>
{:else if icon === 'CSS'}
    <div class="iconify">
        <DiCss3/>
    </div>
{:else if icon === 'Terminal'}
    <div class="iconify">
        <DiTerminal/>
    </div>
{:else if icon === 'Python'}
    <div class="iconify">
        <DiPython/>
    </div>
{:else if icon === 'Figma'}
    <div class="iconify">
        <FaFigma/>
    </div>

<!--Weather Icons!-->
{:else if icon === 'Sun'}
    <div style={style}>
        <WiSunrise/>
    </div>
{:else if icon === 'Moon'}
    <div style={style}>
        <WiMoonset/>
    </div>
<!--    IoICONS!-->
<!--{:else if icon === 'Sun'}-->
<!--    <div style={style}>-->
<!--        <IoIosSunny/>-->
<!--    </div>-->
<!--{:else if icon === 'Moon'}-->
<!--    <div style={style}>-->
<!--        <IoIosMoon/>-->
<!--    </div>-->
    {:else if icon === 'ArrowRight'}
    <div class="arrow">
        <IoIosArrowDroprightCircle title={title} class="arrow" />
    </div>
    <!--Custom SVGS!-->
{:else if icon === 'Svelte'}
    <SvelteSVG/>
{:else if icon === 'HistoryOfComputing'}
    <HistoryOfComputingSVG/>
{:else if icon === 'Prettilier'}
    <PrettilierSVG/>
{:else if icon === 'DP'}
    <DPSVG/>
{:else if icon === 'FoodSpector'}
    <FoodspectorSVG/>

{/if}
<style>
    .iconify {
        color: var(--primary);
        display: flex;
        margin: 2% 10%;
        justify-content: center;
        transition: all .5s ease 0s;
    }
    .iconify:hover {
        color: var(--amethyst);
    }
    .arrow {
        color: var(--primary);
        height: 32px;
        top: 6px;
        justify-content: center;
        transition: all .5s ease 0s;
        display: inline-flex;
        position: relative;
        margin-left: 10px;
    }
    .arrow:hover {
        color: var(--amethyst);
    }
</style>
