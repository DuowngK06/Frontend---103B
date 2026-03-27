let todos = [
    { id: "P01", task: "Nghe nhac", isDone: true },
    { id: "P02", task: "Chơi game", isDone: true },
    { id: "P03", task: "Hoc bai", isDone: false },

];
let listTaskElement = document.getElementById('list_task');
let inputElement = document.getElementById('input_task');
let buttonElement = document.getElementById('button_task');


const handleRenderData = () => {
    localStorage.setItem('todos', JSON.stringify(todos));

    todos.forEach((item) => {
        let itemElemen = document.createElement('li');
        itemElemen.innerHTML = item.task;
        listTaskElement.appendChild(itemElemen);
    });
};
handleRenderData();

buttonElement.addEventListener("click", () => {
    let nameTask = inputElement.value.trim();
    let newTask = {
        id: Date.now(),
        task: nameTask,
        isDone: false,
    };
    todos.push(newTask);
    handleRenderData();
});
