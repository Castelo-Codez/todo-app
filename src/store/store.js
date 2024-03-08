import $appendToLocalStorge from "@/helpers/AppendToLocalStorge";
import {ref} from "vue";
let $mainTodosArr;

if (window.localStorage.getItem("todos")) {
    $mainTodosArr = ref(JSON.parse(window.localStorage.getItem("todos")));
} else {
    $mainTodosArr = ref([]);
}

export {$mainTodosArr};
