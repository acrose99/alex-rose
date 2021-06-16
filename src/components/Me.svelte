<script lang="ts">
    import { getContext } from 'svelte'

    const theme$: any = getContext('theme')

    $: theme = $theme$

</script>

{#if theme === 'bright'}
<img class="waves" src="content/me/AlexBright.png" alt="Alex"/>
    {:else }
    <img src="content/me/AlexDark.png" alt="Alex"/>

{/if}
<style>
    img {
        margin: 0 auto;
        height: 200px;
        display: block;
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
    .waves {
        position: relative;
        animation: waves 2s ease-in-out infinite alternate 0.05s;
    }
</style>
