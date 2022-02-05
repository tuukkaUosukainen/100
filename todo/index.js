const { removeById, getSumOf } = require('./helpers');

let todos = [
  { id: 1, name: 'todoName', completed: false },
  { id: 2, name: 'todoTwoName', completed: false }
];

function render() {
  // Create new DOM elements
  const root = document.getElementById('root');
  const heading = newElement('h1');
  const dateParagraph = newElement('p');
  const todoDataParagraph = newElement('p');
  const hr = newElement('hr');
  const ul = newElement('ul');

  // Add element content
  heading.textContent = 'TODO';
  dateParagraph.textContent = new Date().toLocaleString();

  const [sumOfCompleted, sumOfNotCompleted] = getSumOf(todos, 'completed');
  todoDataParagraph.textContent = `Completed: ${sumOfCompleted} Incomplete: ${sumOfNotCompleted}`;

  // Render elements to page
  root.appendChild(heading);
  root.appendChild(dateParagraph);
  root.appendChild(ul);
  dateParagraph.appendChild(todoDataParagraph);
  dateParagraph.appendChild(hr);

  // render todolist
  for (let i = 0; i < todos.length; i++) {
    const li = newElement('li');
    const deleteButton = newElement('button');
    deleteButton.id = 'deleteButton_' + todos[i].name;
    deleteButton.textContent = 'Delete';

    // on delete click
    deleteButton.addEventListener('click', () => {
      // update todos
      const newTodos = removeById(todos, todos[i].id);
      todos = newTodos;

      // clear dom and re-render
      clearDOM(heading, dateParagraph, todoDataParagraph, ul);
      render();
    });

    // render todolist item
    ul.appendChild(li);
    li.id = todos[i].id + todos[i].name;
    li.textContent = 'Name: ' + todos[i].name + ' completed: ' + todos[i].completed;
    li.append(deleteButton);
  }
};

render();

function clearDOM(heading, dateParagraph, todoDataParagraph, ul) {
  heading.remove();
  dateParagraph.remove();
  todoDataParagraph.remove();
  ul.remove();
}

function newElement(type) {
  return document.createElement(type);
}


