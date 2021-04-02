<script lang="ts">
    import {projects} from '../../routes/about/projects.json'
    import Icon from "../Icon.svelte";
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
    h2 a {
        color: var(--primary);
        text-decoration: none;
    }
    a {
        color: var(--secondary);
    }
</style>

<div style="display: flex">
    <h2><a href="/projects">Projects<Icon title="Click for details" icon="ArrowRight" /></a></h2>
</div>{#each projects as project}
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
