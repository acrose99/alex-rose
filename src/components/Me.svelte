<script lang="ts">
    import { getContext } from 'svelte'

    const theme$: any = getContext('theme')

    $: theme = $theme$

</script>

{#if theme === 'bright'}
<img src="content/me/AlexBright.png" alt="Alex"/>
    {:else }
    <img src="content/me/AlexDark.png" alt="Alex"/>

{/if}
<style>
    img {
        margin: 0 auto;
        height: 200px;
        display: block;
    }
</style>
