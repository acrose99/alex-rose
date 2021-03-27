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
</style>

<h2>Projects</h2>
{#each projects as project}
    <h3>{project["Project"]}
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
