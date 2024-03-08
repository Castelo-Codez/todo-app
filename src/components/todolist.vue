<script setup>
import {$mainTodosArr} from "@/store/store";
import {ref} from "vue";
const $currentTab = ref(1);
const $currentRendering = ref("all");

function $clearComp() {
    $mainTodosArr.value = $mainTodosArr.value.filter((el) => el.done === false);
}
</script>
<template>
    <ul
        class="mt-5 relative w-full bg-LightTh-Very-Light-Gray dark:bg-DarkTh-Very-Dark-Desaturated-Blue rounded-t-md rounded-b-md"
        aria-label="todos list"
        role="list"
    >
        <li
            v-for="($todo, $index) in $mainTodosArr.filter((el) => {
                return $currentRendering == 'all'
                    ? el
                    : $currentRendering == 'active'
                    ? el.done === false
                    : $currentRendering == 'completed'
                    ? el.done === true
                    : '';
            })"
            :key="$index"
            role="listitem"
            :aria-label="$todo.title"
            class="p-5 border-b group gap-x-6 flex border-b-LightTh-Light-Grayish-Blue dark:border-b-DarkTh-Very-Dark-Grayish-Blue relative"
        >
            <div aria-label="checkbox container">
                <input
                    type="checkbox"
                    aria-hidden="true"
                    :id="'chceckbox-' + $index"
                    class="hidden"
                    @change="$todo.done = !$todo.done"
                />
                <label
                    :for="'chceckbox-' + $index"
                    aria-label="make a it done"
                    class="flex justify-center items-center w-[23px] h-[23px] cursor-pointer border border-LightTh-Very-Light-Grayish-Blue dark:border-DarkTh-Very-Dark-Grayish-Blue rounded-full"
                    :class="[$todo.done ? ' bg-main-gradient' : '']"
                >
                    <span
                        aria-label="checked icon"
                        aria-hidden="true"
                        v-if="$todo.done"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11"
                            height="9"
                        >
                            <path
                                fill="none"
                                stroke="#FFF"
                                stroke-width="2"
                                d="M1 4.304L3.696 7l6-6"
                            />
                        </svg>
                    </span>
                </label>
            </div>
            <span
                aria-label="todo title"
                class="text-DarkTh-Very-Dark-Blue capitalize font-[400] dark:text-DarkTh-Grayish-Blue grid place-content-center"
                :class="[
                    $todo.done
                        ? ' text-LightTh-Light-Grayish-Blue dark:text-DarkTh-Very-Dark-Grayish-Blue line-through'
                        : '',
                ]"
            >
                {{ $todo.title }}
            </span>
            <button
                aria-label="remove todo"
                type="button"
                role="button"
                class="absolute z-50 top-2/4 -translate-y-2/4 right-5 lg:opacity-0 lg:group-hover:opacity-100 transition duration-150"
                @click="$mainTodosArr.splice($index, 1)"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    aria-hidden="true"
                >
                    <path
                        fill="#494C6B"
                        fill-rule="evenodd"
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                    />
                </svg>
            </button>
        </li>
        <li
            role="listitem"
            aria-label="controllers"
            class="p-5 text-LightTh-Dark-Grayish-Blue dark:text-DarkTh--Grayish-Blue flex items-center justify-between"
        >
            <span aria-label="todos number">
                {{ $mainTodosArr.length }} items left</span
            >
            <ul
                role="list"
                aria-label="controls data show "
                class="flex p-5 justify-center gap-x-3 bg-LightTh-Very-Light-Gray dark:bg-DarkTh-Very-Dark-Desaturated-Blue rounded-t-md rounded-b-md w-full absolute bottom-[-5rem] left-0 lg:static lg:p-0 lg:w-fit"
            >
                <li aria-label="show All todos">
                    <button
                        aria-label="all todos button"
                        role="button"
                        type="button"
                        class="capitalize transition duration-300 hover:text-Primary-BrightBlue"
                        @click="
                            $currentTab = 1;
                            $currentRendering = 'all';
                        "
                        :class="[
                            $currentTab === 1 ? ' text-Primary-BrightBlue' : '',
                        ]"
                    >
                        All
                    </button>
                </li>
                <li aria-label="show active todos">
                    <button
                        aria-label="active todos button"
                        role="button"
                        type="button"
                        class="capitalize transition duration-300 hover:text-Primary-BrightBlue"
                        @click="
                            $currentTab = 2;
                            $currentRendering = 'active';
                        "
                        :class="[
                            $currentTab === 2 ? ' text-Primary-BrightBlue' : '',
                        ]"
                    >
                        active
                    </button>
                </li>
                <li aria-label="show completed todos">
                    <button
                        aria-label="completed todos button"
                        role="button"
                        type="button"
                        class="capitalize transition duration-300 hover:text-Primary-BrightBlue"
                        @click="
                            $currentTab = 3;
                            $currentRendering = 'completed';
                        "
                        :class="[
                            $currentTab === 3 ? ' text-Primary-BrightBlue' : '',
                        ]"
                    >
                        completed
                    </button>
                </li>
            </ul>
            <button
                aria-label="clear completed todos"
                type="button"
                role="button"
                class="capitalize transition duration-300 hover:text-Primary-BrightBlue"
                @click="$clearComp"
            >
                clear completed
            </button>
        </li>
    </ul>
    <h2
        class="mt-4 relative top-[5rem] lg:static lg:top-0 capitalize text-[0.8rem] text-center text-DarkTh--Grayish-Blue"
    >
        drag and drop to renderd list
    </h2>
</template>
