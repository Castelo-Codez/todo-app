<script setup>
import $todos from "@/store/store";
</script>
<template>
    <ul
        class="mt-5 w-full bg-LightTh-Very-Light-Gray dark:bg-DarkTh-Very-Dark-Desaturated-Blue rounded-t-md"
        aria-label="todos list"
        role="list"
    >
        <li
            v-for="($todo, $index) in $todos"
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
                class="text-DarkTh-Very-Dark-Blue text-[1.3rem] capitalize font-[400] dark:text-DarkTh-Grayish-Blue"
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
                @click="$todos.splice($index, 1)"
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
    </ul>
</template>
