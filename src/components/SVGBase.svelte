<script>
    export let title = null;
    export let viewBox;
</script>

<style>
    svg {
        stroke: currentColor;
        fill: currentColor;
        stroke-width: 0;
        /*width: auto;*/
        /*height: auto;*/
        /*max-height: 100%;*/
    }
</style>

<svg xmlns="http://www.w3.org/2000/svg" {viewBox}>
    {#if title}
        <title>{title}</title>
    {/if}
    <slot />
</svg>
