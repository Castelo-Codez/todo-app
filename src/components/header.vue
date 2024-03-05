<script setup>
import themeSwitcher from "./ThemeSwitcher.vue";
</script>
<template>
    <header
        role="banner"
        aria-label="header"
        class="flex justify-between items-center"
    >
        <h1
            role="heading"
            aria-level="1"
            aria-label="main heading"
            class="text-LightTh-Very-Light-Gray tracking-[1rem] text-[2.2rem] font-[800]"
        >
            TODO
        </h1>
        <themeSwitcher />
    </header>
</template>
