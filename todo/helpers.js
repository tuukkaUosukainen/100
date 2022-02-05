function addNewTodo(arr, newTodoObj) {
  return [...arr, newTodoObj];
}

function removeById(arr, removeId) {
  return arr.filter(obj => obj.id !== removeId);
}

function renameTodo(oldTodo, newTodo) {
  return {
    ...oldTodo,
    name: newTodo
  };
}

module.exports = {
  renameTodo,
  addNewTodo,
  removeById
};