function removeById(arr, removeId) {
  return arr.filter(obj => obj.id !== removeId);
}

module.exports = {
  removeById
}