<script lang="ts">
    import { fade } from 'svelte/transition';
    import IoIosSunny from 'svelte-icons/io/IoIosSunny.svelte';
    import IoIosMoon from 'svelte-icons/io/IoIosMoon.svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    type ColorMode = 'bright' | 'dark';
    let theme: ColorMode = 'dark';

    const getPrefersDarkMode = () =>
        window ? window.matchMedia('(prefers-color-scheme: dark)').matches : true;

    const getStoredTheme = () =>
        localStorage.getItem('theme') as ColorMode | undefined;

    const setBrightTheme = () => {
        document.body.classList.toggle('bright', true);
        document.body.classList.toggle('dark', false);
        theme = 'bright';
        dispatch('message', {
            theme: theme,
        });
    };

    const setDarkTheme = () => {
        document.body.classList.toggle('bright', false);
        document.body.classList.toggle('dark', true);
        theme = 'dark';
        dispatch('message', {
            theme: theme,
        });
    };

    // ts-lint was freaking out, so this "_" argument is just to make that go away
    const checkTheme = (_: any) => {
        const storedTheme = getStoredTheme();

        if (storedTheme === 'bright') setBrightTheme();
        else if (storedTheme === 'dark') setDarkTheme();
        else if (document.body.classList.contains('bright')) setBrightTheme();
        else if (document.body.classList.contains('bright')) setDarkTheme();
        else if (getPrefersDarkMode()) setDarkTheme();
        else setBrightTheme();
    };

    const toggleColorMode = () => {
        if (theme === 'bright') {
            setDarkTheme();
        } else if (theme === 'dark') {
            setBrightTheme();
        }

        theme = document.body.classList.contains('bright') ? 'bright' : 'dark';
        localStorage.setItem('theme', theme);

        if (!document.body.classList.contains('bg-transition'))
            document.body.classList.add('bg-transition');
    };
</script>

<button
        on:click={toggleColorMode}
        use:checkTheme
        aria-label="toggle color mode"
>
    <div in:fade>
        {#if theme === 'bright'}
            <IoIosMoon />
        {:else}
            <IoIosSunny />
        {/if}
    </div>
</button>

<style>
    button {
        text-decoration: none;
        transition: 0.1s;
        padding: 0.75em 1.5em;
        border-radius: 4px;
        font-weight: 600;
        background: transparent;
        border: none;
        cursor: pointer;
    }
    button:hover {
        background: var(--background-hover);
    }
    button > div {
        height: 1.25rem;
        width: 1.25rem;
        color: var(--text);
    }

    @media screen and (max-width: 600px) {
        button > div {
            height: 1.15rem;
            width: 1.15rem;
        }
    }
</style>
