const todoList = [];

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const html = `
      <div>${todo.name}</div>
      <div>${todo.dueDate}</div>
      <button 
        class="delete-todo-button"
        onclick="deleteTodo(${i})">
        Delete
      </button> 
    `;

    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const nameInput = document.querySelector('.js-name-input');
  const dateInput = document.querySelector('.js-due-date-input');

  todoList.push({
    name: nameInput.value,
    dueDate: dateInput.value
  });

  nameInput.value = '';
  dateInput.value = '';

  renderTodoList();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

renderTodoList();
