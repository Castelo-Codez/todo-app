import {reactive, watch} from "vue";
let $reactiveTodosArr = reactive({
    todos: [],
});
if (window.localStorage.getItem("todos")) {
    $reactiveTodosArr.todos = JSON.parse(window.localStorage.getItem("todos"));
} else {
    $reactiveTodosArr.todos = [];
}

watch($reactiveTodosArr, (newObj) => {
    window.localStorage.setItem("todos", JSON.stringify(newObj.todos));
});
export {$reactiveTodosArr};
