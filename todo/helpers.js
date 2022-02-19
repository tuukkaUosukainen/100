function addNewTodo(arr, newTodoObj) {
  return [...arr, newTodoObj];
}

function removeById(arr, removeId) {
  return arr.filter(obj => obj.id !== removeId);
}

function getCompletedTodoData(arr) {
  return [
    arr.filter(todo => todo.completed).length,
    arr.filter(todo => !todo.completed).length
  ];
}

module.exports = {
  addNewTodo,
  removeById,
  getCompletedTodoData
};