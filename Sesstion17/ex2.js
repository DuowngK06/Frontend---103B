

const initialTodos = [
    { id: 1, task: "Mua banh chung", done: false },
    { id: 2, task: "Don nha don Tet", done: false },
    { id: 3, task: "Goi banh chung", done: false },
    { id: 4, task: "Trang tri nha cua bang hoa mai, hoa dao", done: false },
    { id: 5, task: "Mua phong bao li xi", done: false },
    { id: 6, task: "Chuẩn bị mam ngũ qua", done: false },
];



// danh sách công việc
function renderTodos(todoArray) {
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    todoArray.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item.task;
        if (item.done) {
            li.classList.add("done");
        }
        // Thêm sự kiện click để đổi trạng thái done
        li.addEventListener("click", () => {
            todoArray[index].done = !todoArray[index].done;
            localStorage.setItem("myTodos", JSON.stringify(todoArray));
            renderTodos(todoArray); // cập nhật lại giao diện
        });
        list.appendChild(li);
    });
}

// Khi trang load
window.addEventListener("DOMContentLoaded", () => {
    let savedTodos = localStorage.getItem("myTodos");
    if (savedTodos) {
        savedTodos = JSON.parse(savedTodos);
    } else {
        savedTodos = initialTodos;
        localStorage.setItem("myTodos", JSON.stringify(initialTodos));
    }
    renderTodos(savedTodos);
});
