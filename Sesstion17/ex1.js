

const todos = [
    { id: 1, task: "Mua banh chung", done: false },
    { id: 2, task: "Don nha đon Tet", done: false },
    { id: 3, task: "Goi bánh chưng", done: false },
    { id: 4, task: "Trang trí nhà cửa", done: false },

];

// Hàm hiển thị danh sách todos
function renderTodos(todoArray) {
    const list = document.getElementById("todoList");
    list.innerHTML = ""; // Xóa nội dung cũ
    todoArray.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.task;
        list.appendChild(li);
    });
}

// Khi trang load lần đầu
window.addEventListener("DOMContentLoaded", () => {
    // Kiểm tra xem đã có dữ liệu trong localStorage chưa
    if (!localStorage.getItem("myTodos")) {
        // Nếu chưa có thì lưu mảng todos vào localStorage
        localStorage.setItem("myTodos", JSON.stringify(todos));
    }

    // Lấy dữ liệu từ localStorage để hiển thị
    const savedTodos = JSON.parse(localStorage.getItem("myTodos"));
    renderTodos(savedTodos);
});