import {ref, watch} from "vue";
let $mainTodosArr;
if (window.localStorage.getItem("todos")) {
    $mainTodosArr = ref(JSON.parse(window.localStorage.getItem("todos")));
} else {
    $mainTodosArr = ref([]);
}
watch($mainTodosArr.value, (newArr) => {
    window.localStorage.setItem("todos", JSON.stringify(newArr));
});

export {$mainTodosArr};
