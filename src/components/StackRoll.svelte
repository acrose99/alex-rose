<script lang="ts">
    import {stacks} from '../routes/about/stacks.json'
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
    a {
        color: var(--primary);
    }
    h3  {
        color: var(--secondary);
        text-align: center;
    }
</style>

<h2><a href="/stacks">Skills</a></h2>
{#each stacks as stack}
    <h3>{stack["stack"]}:
        {#each stack["languages"] as language}
            {#if stack["languages"].indexOf(language) !== (stack["languages"].length -1) }
                <span> {language}, &nbsp;</span>
                {:else}
                <span>{language}</span>
            {/if}
        {/each}
    </h3>
{/each}
