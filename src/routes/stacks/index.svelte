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
    import Stack from "../../components/Stack.svelte";
    export let stacks: {
        header: string;
        leftImg: string;
        rightImg: string;
        html: any;
    }[];
</script>

<style>
    h1 {
        text-align: center;
        color: var(--primary);
    }
</style>

<h1>My (full) Stack </h1>
<Stack {stacks} />
