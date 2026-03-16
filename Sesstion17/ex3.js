const initialTodos = [
    { id: 1, task: "Mua banh chung", done: false },
    { id: 2, task: "Don nha don Tet", done: false },
    { id: 3, task: "Goi banh chung", done: false },
    { id: 4, task: "Trang tri nha cua bang hoa mai, hoa dao", done: false },
    { id: 5, task: "Mua phong bao li xi", done: false },
    { id: 6, task: "Chuẩn bị mam ngũ qua", done: false },
];

let todos = [];

// hiển thị danh sách
function renderTodos(todoArray) {
    const list = document.getElementById("todoList");
    list.innerHTML = "";

    todoArray.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item.task;

        if (item.done) {
            li.classList.add("done");
        }

        // click đổi trạng thái done
        li.addEventListener("click", () => {
            todoArray[index].done = !todoArray[index].done;

            localStorage.setItem("myTodos", JSON.stringify(todoArray));

            renderTodos(todoArray);
        });

        list.appendChild(li);
    });
}


// thêm công việc
function addTodo() {

    const input = document.getElementById("todoInput");
    const task = input.value.trim();

    // kiểm tra rỗng
    if (task === "") {
        alert("Vui lòng nhập công việc");
        return;
    }

    const newTodo = {
        id: Date.now(),
        task: task,
        done: false
    };

    todos.unshift(newTodo); // thêm lên đầu danh sách

    localStorage.setItem("myTodos", JSON.stringify(todos));

    renderTodos(todos);

    input.value = "";
}


// khi trang load
window.addEventListener("DOMContentLoaded", () => {

    let savedTodos = localStorage.getItem("myTodos");

    if (savedTodos) {
        todos = JSON.parse(savedTodos);
    } else {
        todos = initialTodos;
        localStorage.setItem("myTodos", JSON.stringify(initialTodos));
    }

    renderTodos(todos);


    // nút thêm
    document.getElementById("addBtn").addEventListener("click", addTodo);


    // nhấn enter
    document.getElementById("todoInput").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTodo();
        }
    });

});