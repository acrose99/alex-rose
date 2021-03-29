<script lang="ts">
    import {projects} from '../routes/about/projects.json'
</script>

<style>
    h2 {
        text-align: center;
        margin: 20px auto;
    }
    h2,h3 {
        color: var(--primary);
    }
    span {
        color: var(--text);
    }
    h3  {
        color: var(--secondary);
        text-align: center;
    }
    a {
        color: var(--secondary);
    }
</style>

<h2><a href="/projects">Projects</a></h2>
{#each projects as project}
    <h3><a href={project["ref"]}>{project["Project"]}</a>
        <span>(Languages:</span>
        {#each project["languages"] as language}
            {#if project["languages"].indexOf(language) !== (project["languages"].length -1) }
                <span> {language}, &nbsp;</span>
            {:else}
                <span>{language})</span>
            {/if}
        {/each}

    </h3>
{/each}
