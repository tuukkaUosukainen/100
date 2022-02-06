function addNewTodo(arr, newTodoObj) {
  return [...arr, newTodoObj];
}

function removeById(arr, removeId) {
  return arr.filter(obj => obj.id !== removeId);
}

function getSumOf(arr, key) {
  return [
    arr.filter(todo => todo[key]).length,
    arr.filter(todo => !todo[key]).length
  ];
}

module.exports = {
  addNewTodo,
  removeById,
  getSumOf
};