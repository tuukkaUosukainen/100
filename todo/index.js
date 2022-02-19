const { removeById, getSumOf, addNewTodo } = require('./helpers');
let todos = require('./data.json');

const addTodoBtn = document.getElementById('add-todo-btn');
const infoSection = document.getElementById('info-section');
const todoList = document.getElementById('todo-list');

addTodoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newTodoName = document.getElementById('todo-input');
  const newTodo = {
    id: new Date().getTime(), name: newTodoName.value, completed: false
  };
  todos = addNewTodo(todos, newTodo);
  const todoElements = document.getElementsByTagName('li');
  const date = document.getElementById('date');
  const completedData = document.getElementById('completed-data');

  date.remove();
  completedData.remove();
  Array.from(todoElements).forEach(todo => todo.remove());
  newTodoName.value = '';
  render();
});

function render() {
  // Create new DOM elements
  const dateParagraph = newElement('p');
  dateParagraph.id = 'date';
  const todoDataParagraph = newElement('p');
  todoDataParagraph.id = 'completed-data';
  const ul = newElement('ul');

  // Add element content
  dateParagraph.textContent = new Date().toLocaleString();

  const [sumOfCompleted, sumOfNotCompleted] = getSumOf(todos, 'completed');
  todoDataParagraph.textContent = `Completed: ${sumOfCompleted} Incomplete: ${sumOfNotCompleted}`;

  // Render elements to page
  infoSection.appendChild(dateParagraph);
  todoList.appendChild(ul);
  dateParagraph.appendChild(todoDataParagraph);

  // render todolist
  for (let i = 0; i < todos.length; i++) {
    const li = newElement('li');

    // Edit functionality
    const editButton = newElement('button');
    editButton.id = 'editButton_' + todos[i].name;
    editButton.textContent = todos[i].completed ? 'Undo' : 'Done';

    // on edit click
    editButton.addEventListener('click', () => {
      // update todos
      todos = todos.map(todo => {
        if (todo.id === todos[i].id) {
          todo.completed = !todos[i].completed;
        }
        return todo;
      });

      // clear dom and re-render
      clearDOM(dateParagraph, todoDataParagraph, ul);
      render();
    });

    // Delete functionality
    const deleteButton = newElement('button');
    deleteButton.id = 'deleteButton_' + todos[i].name;
    deleteButton.textContent = 'X';

    // on delete click
    deleteButton.addEventListener('click', () => {
      // update todos
      todos = removeById(todos, todos[i].id);

      // clear dom and re-render
      clearDOM(dateParagraph, todoDataParagraph, ul);
      render();
    });

    // render todolist item
    ul.appendChild(li);
    li.id = todos[i].id + todos[i].name;
    if (todos[i].completed) li.classList.add('completed');
    li.textContent = todos[i].name;
    li.append(editButton);
    li.append(deleteButton);
  }
}

render();

function clearDOM(dateParagraph, todoDataParagraph, ul) {
  dateParagraph.remove();
  todoDataParagraph.remove();
  ul.remove();
}

function newElement(type) {
  return document.createElement(type);
}


