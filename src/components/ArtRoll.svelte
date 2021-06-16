<script lang="ts">
    import {artwork} from '../routes/art/art.json'
    import dayjs from 'dayjs';

    // const sortedArtMe = artwork["Me"]
    //     .sort((a, b) => {
    //         if (a["date"] < b["date"]) return 1;
    //         else return -1;
    //     });
    const sortedArtSeen = artwork["Seen"]
        .sort((a, b) => {
            if (a["date"] < b["date"]) return 1;
            else return -1;
        });
</script>

<style>

    h1 {
        color: var(--primary);
        text-align: center;
    }
    h2, h3  {
        color: var(--secondary);
        text-align: center;
    }
    p {
        text-align: center;
        font-size: 1.1em;
        color: var(--text);
    }
    img {
        display: block;
        margin: 0 auto;
        height: 20em;
        width: 20em;
        max-width: 600px;
        max-height: 800px;
    }
</style>
<h1>Some Artwork I've Seen</h1>
{#each sortedArtSeen as art}
    <h1>
        {dayjs(art["date"]).format('MMMM YYYY')}
    </h1>
    <h2>Artist: {art["artist"]}</h2>
    <img src={`content/art/${art.src}`} alt={art["title"]}>
    <p>Location: {art["location"]}</p>
    <p>{art["description"]}</p>

{/each}

<!--<h1>My Artwork</h1>-->
<!--{#each sortedArtMe as art}-->
<!--    <h3>{art["title"]}:-->
<!--                {dayjs(art["date"]).format('MMMM YYYY')}-->
<!--    </h3>-->
<!--    <img src={`content/art/${art.src}.png`} alt={art["title"]}>-->
<!--    <p>{art["description"]}</p>-->

<!--{/each}-->
