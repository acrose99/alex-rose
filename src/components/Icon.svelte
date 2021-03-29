<script lang="ts">
    import HistoryOfComputingSVG from "./SVGS/HistoryOfComputingSVG.svelte";

    export let icon;
    import DiJavascript1 from 'svelte-icons/di/DiJavascript1.svelte'
    import DiMongodb from 'svelte-icons/di/DiMongodb.svelte'
    import DiNodejsSmall from 'svelte-icons/di/DiNodejsSmall.svelte'
    import DiReact from 'svelte-icons/di/DiReact.svelte'
    import DiCss3 from 'svelte-icons/di/DiCss3.svelte'
    import DiTerminal from 'svelte-icons/di/DiTerminal.svelte'
    import DiPython from 'svelte-icons/di/DiPython.svelte'
    import FaFigma from 'svelte-icons/fa/FaFigma.svelte'
    import PrettilierSVG from "./SVGS/PrettilierSVG.svelte";
    import FoodspectorSVG from "./SVGS/FoodspectorSVG.svelte";
</script>

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
        {:else if icon === 'HistoryOfComputing'}
        <div class="iconify">
            <HistoryOfComputingSVG/>
        </div>
        {:else if icon === 'Prettilier'}
        <div class="iconify">
            <PrettilierSVG/>
        </div>
        {:else if icon === 'FoodSpector'}
        <div id="foodspector">
            <FoodspectorSVG/>
        </div>
    {/if}
<style>
    #foodspector {
        color: var(--primary);
        height: 64px;
        width: 70px;
        margin: 2px;
    }
    .iconify {
        color: var(--primary);
        height: 64px;
        width: 64px;
        margin: 2px;
    }
</style>
