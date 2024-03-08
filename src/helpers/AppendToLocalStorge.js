function $appendToLocalStorge($newEl) {
    window.localStorage.setItem("todos", JSON.stringify($newEl));
}

export default $appendToLocalStorge;
