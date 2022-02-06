const { removeById, getSumOf, addNewTodo } = require('./helpers');

let todos = [
  { id: 1, name: 'todoName', completed: false },
  { id: 2, name: 'todoTwoName', completed: false },
  { id: 3, name: 'todoThreeName', completed: false },
  { id: 4, name: 'todoFourName', completed: false },
  { id: 5, name: 'todoFiveName', completed: false },
  { id: 6, name: 'todoSixName', completed: false }

];

const addTodoBtn = document.getElementById('add-todo-btn');
const root = document.getElementById('root');

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
  const hr = document.getElementById('hr');

  date.remove();
  completedData.remove();
  hr.remove();
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
  const hr = newElement('hr');
  hr.id = 'hr';
  const ul = newElement('ul');

  // Add element content
  dateParagraph.textContent = new Date().toLocaleString();

  const [sumOfCompleted, sumOfNotCompleted] = getSumOf(todos, 'completed');
  todoDataParagraph.textContent = `Completed: ${sumOfCompleted} Incomplete: ${sumOfNotCompleted}`;

  // Render elements to page
  root.appendChild(dateParagraph);
  root.appendChild(ul);
  dateParagraph.appendChild(todoDataParagraph);
  dateParagraph.appendChild(hr);

  // render todolist
  for (let i = 0; i < todos.length; i++) {
    const li = newElement('li');

    // Edit functionality
    const editButton = newElement('button');
    editButton.id = 'editButton_' + todos[i].name;
    editButton.textContent = todos[i].completed ? 'Open' : 'Done';

    // on edit click
    editButton.addEventListener('click', () => {
      // update todos
      const editedTodos = todos.map(todo => {
        if (todo.id === todos[i].id) {
          todo.completed = !todos[i].completed;
        }
        return todo;
      });
      todos = editedTodos;

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
      const newTodos = removeById(todos, todos[i].id);
      todos = newTodos;

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
};

render();

function clearDOM(dateParagraph, todoDataParagraph, ul) {
  dateParagraph.remove();
  todoDataParagraph.remove();
  ul.remove();
}

function newElement(type) {
  return document.createElement(type);
}


