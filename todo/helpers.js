function addNewTodo(arr, newTodoObj) {
  return [...arr, newTodoObj];
}

function removeById(arr, removeId) {
  return arr.filter(obj => obj.id !== removeId);
}

module.exports = {
  addNewTodo,
  removeById
}