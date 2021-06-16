<script>
    export let title = null;
    export let viewBox;
</script>

<style>
    div {
        display: flex;
        justify-content: center;
    }
    svg {
        color: var(--primary);
        stroke: currentColor;
        fill: currentColor;
        stroke-width: 0;
        height: 36px;
        width: 36px;
        margin: 2% 10%;
    }
    svg:hover {
        color: var(--amethyst);
    }
</style>

<div>
    <svg style="transition: all .5s ease 0s" xmlns="http://www.w3.org/2000/svg" {viewBox}>
        {#if title}
            <title>{title}</title>
        {/if}
        <slot />
    </svg>
</div>

