<script setup>
import {ref} from "vue";
import { $mainTodosArr} from "@/store/store";
const $todoTitle = ref("");
function $addtodo() {
    if ($todoTitle.value == "") {
        return;
    } else {
        const $todo = {
            title: $todoTitle.value,
            done: false,
            id: Date.now(),
        };
        $mainTodosArr.value.push($todo);
        $todoTitle.value = "";
    }
}
</script>
<template>
    <form
        role="form"
        id="form"
        aria-label="form"
        class="flex gap-x-10 items-center relative mt-10"
        @submit.prevent="$addtodo"
    >
        <input
            type="text"
            v-model="$todoTitle"
            aria-label="input field"
            placeholder="create a new todo"
            class="p-5 flex-1 focus-within:outline-none placeholder:transition placeholder:duration-150 focus-within:placeholder:opacity-0 pl-16 dark:bg-DarkTh-Very-Dark-Desaturated-Blue dark:caret-white dark:text-DarkTh-Light-Grayish-Blue-hover rounded-md"
        />
        <button
            class="order-first absolute top-2/4 left-6 -translate-y-2/4 w-[23px] h-[23px] bg-none rounded-full border border-LightTh-Very-Light-Grayish-Blue dark:border-DarkTh-Very-Dark-Grayish-Blue block"
            aria-label="submit button"
            type="submit"
            role="button"
        ></button>
    </form>
</template>
