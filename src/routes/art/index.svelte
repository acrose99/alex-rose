<script lang="ts">
    import ArtRoll from "../../components/ArtRoll.svelte";

</script>

<h2>This is a collection of murals I've seen, organized by date</h2>
<h4>Right Click/Hold Down an image and click/touch "view image" to see their full resolution.</h4>

<p>
    One cool thing specifically about 'mural hunting' is that if you are able to capture something before it gets taken down by either the city or the property owners, you basically have saved that piece of art, which is something kinda unique, I think.
</p>
<ArtRoll/>

<style>
    h2 {
        color: var(--primary);
        text-align: center;
    }
    h4 {
        color: var(--primary);
        text-align: center;
    }
    p {
        color: var(--text);
    }
</style>
