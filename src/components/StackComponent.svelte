<script>
    export let header; export let leftImg; export let rightImg;
</script>

<div class="rectangle" style="transition: all 1.3s ease 0s">
    <div class="inner-rectangle-left" style="transition: all 2s ease 0s">
        <div class="inner-rectangle-svg">
            <img alt="" class="iconify" src={`content/logos/${leftImg}`}>
        </div>
    </div>
    <a class="rectangle-text" href="https://github.com/acrose99/HistoryOfComputing">
        {header}
    </a>
    <div class="inner-rectangle-right" style="transition: all 2s ease 0s" >
        <div class="inner-rectangle-svg">
            <img alt="" class="iconify" src={`content/logos/${rightImg}`}></div>
    </div>
</div>

<style>
    .rectangle {
        width: 650px;
        height: 80px;
    }
    .rectangle {
        /* height: 70px; */
        margin: auto;
        display: flex;
        /* width: 600px; */
        background-color: var(--background-item);
    }
    .inner-rectangle-left {
        flex-grow: 1;
        background-color: var(--background-item-outline);
        margin-right: auto;
        position: relative;
        box-sizing: border-box;
        pointer-events: auto;
    }
    .inner-rectangle-svg {
        flex-grow: 1;
        overflow: hidden;
        margin-top: 5%;
    }

    .iconify {
        height: 64px;
        width: 64px;
        margin: 2px;
    }

    .rectangle-text {
        width: 80%;
        text-align: center;
        margin-top: 25px;
        font-size: 24px;
        color: var(--text);
    }
    .inner-rectangle-right {
        flex-grow: 1;
        background-color: var(--background-item-outline);
        position: relative;
        box-sizing: border-box;
        pointer-events: auto;
    }
    .rectangle:hover {
        background-color: var(--primary-hover);
    }
    .inner-rectangle-left:hover, .inner-rectangle-right:hover {
        background-color: var(--background-hover);
    }
</style>
