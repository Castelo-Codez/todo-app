<script setup>
import headerVue from "./components/header.vue";
import Form from "./components/Form.vue";
import todolist from "./components/todolist.vue";
</script>
<template>
    <div aria-hidden="true" class="background">
        <div class="desktop hidden lg:block">
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
        <div class="mobile lg:hidden">
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
        class="w-full md:w-[50%] xl:w-[35%] absolute left-2/4 -translate-x-2/4 top-[50px] lg:top-[100px] px-6"
    >
        <headerVue />
        <main role="main" aria-label="main content">
            <Form />
            <todolist />
        </main>
    </div>
</template>
<style></style>
