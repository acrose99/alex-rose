<script lang="ts">
    import dayjs from 'dayjs';

    import {events} from '../routes/about/events.json'

    export let isPast: boolean = false;

    const sortedFutureEvents = events["future"]
        .sort((a, b) => {
            if (a["date"] < b["date"]) return 1;
            else return -1;
        });
    const sortedPastEvents = events["past"]
        .sort((a, b) => {
            if (a["dateStart"] < b["dateStart"]) return 1;
            else return -1;
        });
    const sortedCurrentEvents = events["current"]
        .sort((a, b) => {
            if (a["date"] < b["date"]) return 1;
            else return -1;
        });
</script>

<style>
    h1,h2, figure, p {
        text-align: center;
        color: var(--text);
    }

    figure {
        margin: 0 0 1em 0;
    }

    img {

    }
    h1,h2 {
        color: var(--primary);
    }
    span {
        color: var(--secondary);
    }

    @media (min-width: 480px) {
        h1 {
            font-size: 4em;
        }
    }
    p {
        color: var(--text);
    }
    .event {
        display: flex;
        justify-content: center;
    }
    .eventText {
        /*text-align: center;*/
        margin: 5px;
    }
</style>

<svelte:head>
    <title>Timeline</title>
</svelte:head>



<div class="eventContainer">
    <!--		<div class="event">-->
    <!--			<p class="eventText">Today (do git api thing)!</p>-->
    <!--			<p class="eventText date">{dayjs().format('MMM D, YYYY')}</p>-->
    <!--		</div>-->
    <h2 style="color: var(--amethyst)">Future</h2>
    {#each sortedFutureEvents as event}
        <div class="event">
            <p class="eventText"><span>{dayjs(event["date"]).format('MMMM YYYY')}</span>: {event["description"]}</p>
        </div>
    {/each}
    <h2 style="color: var(--crimson)">Current</h2>
    {#each sortedCurrentEvents as event}
        <div class="event">
            <p class="eventText"><span>{dayjs(event["date"]).format('MMMM YYYY')}-Present</span>: {event["description"]}</p>
        </div>
    {/each}
    <h2 style="color: var(--jaffa)">Past</h2>
    {#each sortedPastEvents as event}
        <div class="event">
            {#if event["dateEnd"] !== undefined}
                <p class="eventText"><span>{dayjs(event["dateStart"]).format('MMMM YYYY')}-{dayjs(event["dateEnd"]).format('MMMM YYYY')}</span>: {event["description"]}</p>
            {:else}
                <p class="eventText"><span>{dayjs(event["dateStart"]).format('MMMM YYYY')}</span>: {event["description"]}</p>
            {/if}
        </div>
    {/each}
</div>
