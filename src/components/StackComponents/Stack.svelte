<script context="module" lang="ts">
    export function preload() {
        return this.fetch(`stacks.json`)
            .then((r: { json: () => any }) => r.json())
            .then((stacks: { slug: string; title: string; html: any }[]) => {
                return { stacks };
            });
    }
</script>

<script lang="ts">
    import StackComponent from "./StackComponent.svelte";
    export let stacks: {
        order: string;
        header: string;
        leftImg: string;
        rightImg: string;
        html: any;
    }[];
    const sortedStacks = stacks.sort((a, b) => {
        if (a.order > b.order) return 1;
        else return -1;
    });
</script>

<svelte:head>
    <title>Stack</title>
</svelte:head>

{#each sortedStacks as s}

<StackComponent header={s.header} leftImg={s.leftImg} rightImg={s.rightImg}/>
    <p>
        {@html s.html}
    </p>
{/each}

<style>
    p {
        color: var(--text);
        text-align: center;
    }
</style>
