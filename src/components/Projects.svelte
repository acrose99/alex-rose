<script context="module" lang="ts">
    export function preload() {
        return this.fetch(`projects.json`)
            .then((r: { json: () => any }) => r.json())
            .then((projects: { slug: string; title: string; html: any }[]) => {
                return { projects };
            });
    }
</script>

<script lang="ts">
    import ProjectComponent from "./ProjectComponent.svelte";

    export let projects: {
        header: string;
        ref: string;
        textColor: string;
        backdrop: string;
        leftImg: string;
        rightImg: string;
        html: any;
    }[];
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

{#each projects as p}

    <ProjectComponent header={p.header} ref={p.ref} leftImg={p.leftImg} rightImg={p.rightImg}/>
    <p>
        {@html p.html}
    </p>
{/each}

<style>
    p {
        color: var(--text);
        text-align: center;
    }
</style>
