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
        header: string;
        leftImg: string;
        rightImg: string;
        html: any;
    }[];
</script>

<svelte:head>
    <title>Stack</title>
</svelte:head>

{#each stacks as s}

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
