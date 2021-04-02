<script>
    import Icon from "../Icon.svelte";
    export let header; export let leftImg; export let rightImg; export let ref;
</script>

<div class="rectangle">
    <div class="inner-rectangle-left" style="transition: all 2s ease 0s">
        <Icon icon={leftImg}/>
    </div>
    <div style="transition: all 2s ease 0s" class="rectangle-mid">
        <a class="rectangle-text" href={ref}>
            {header}
        </a>
    </div>
    <div class="inner-rectangle-right" style="transition: all 2s ease 0s" >
        <Icon icon={rightImg}/>
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
    .rectangle-mid {
        width: 80%;
        display: flex;
        justify-content: center;
    }
    .rectangle-mid:hover {
        background-color: var(--primary-hover);
    }
    .rectangle-text {
        text-align: center;
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


    /* Media Queries from here on out */
    @media screen and (min-width: 360px) {
        .rectangle {
            width: 300px;
            height: 90px;
        }
        .rectangle-text {
            font-size: 20px;
            margin-top: 25px;
        }
    }

    /*iPhone 6,7,8, X*/
    @media screen and (min-width: 375px) {
        .rectangle {
            width: 320px;
            height: 90px;
        }
        .rectangle-text {
            font-size: 20px;
            margin-top: 25px;
        }
    }

    /*iPhone Plus, XS, XS Max */
    @media screen and (min-width: 414px) {
        .rectangle {
            width: 350px;
            height: 90px;
        }

        .rectangle-text {
            font-size: 20px;
            margin-top: 25px;
        }
    }

    /* iPad */
    @media screen and (min-width: 768px) {
        .rectangle {
            width: 650px;
            height: 80px;
        }
        .rectangle-text {
            font-size: 24px;
            width: 80%;
        }
    }

    @media screen and (min-width: 1000px) {
        .rectangle {
            width: 900px;
            height: 80px;
        }

        .rectangle-text {
            font-size: 24px;
            width: 80%;
        }
    }

</style>
