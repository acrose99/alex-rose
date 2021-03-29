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
    import Projects from "../../components/Projects.svelte";

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

<style>
    h1 {
        text-align: center;
        color: var(--primary);
    }
</style>

<h1>Some of my Projects </h1>
<Projects {projects} />
