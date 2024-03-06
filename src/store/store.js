import {ref, watch} from "vue";

let $todos;
if (window.localStorage.getItem("todos")) {
    $todos = ref(JSON.parse(window.localStorage.getItem("todos")));
} else {
    $todos = ref([]);
}

watch($todos.value, (newArr) => {
    window.localStorage.setItem("todos", JSON.stringify(newArr));
});

export default $todos;


