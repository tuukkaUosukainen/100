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

function findById(arr, searchId) {
  return arr.find(todo => todo.id === searchId);
}

function getSumOf(arr, key) {
  return [
    arr.filter(todo => todo[key]).length,
    arr.filter(todo => !todo[key]).length
  ];
}

module.exports = {
  renameTodo,
  addNewTodo,
  removeById,
  findById,
  getSumOf
};