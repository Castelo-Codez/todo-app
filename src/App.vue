<script setup>
import headerVue from "./components/header.vue";
</script>
<template>
    <div aria-hidden="true" class="background">
        <div class="desktop hidden md:block">
            <img
                class="max-w-none w-full dark:hidden"
                src="/bg-desktop-light.webp"
                alt="light"
            />
            <img
                class="max-w-none w-full hidden dark:block"
                src="/bg-desktop-dark.webp"
                alt="dark "
            />
        </div>
        <div class="mobile md:hidden">
            <img
                class="max-w-none w-full dark:hidden"
                src="/bg-mobile-light.webp"
                alt="light"
            />
            <img
                class="max-w-none w-full hidden dark:block"
                src="/bg-mobile-dark.webp"
                alt="dark"
            />
        </div>
    </div>
    <div
        aria-label="content"
        class="w-full md:w-2/4 absolute left-2/4 -translate-x-2/4 top-[100px] px-6"
    >
        <headerVue />
        <main role="main" aria-label="main content"></main>
    </div>
</template>
<style></style>
