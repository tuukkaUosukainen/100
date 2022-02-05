const { removeById, addNewTodo } = require('../helpers');

describe('addNewTodo', () => {
  it('Adds a new todo to todo list', () => {
    const initialArray = [];
    const finalArray = [{ id: 1 }];
    const result = addNewTodo(initialArray, { id: 1 });
    expect(result).toEqual(finalArray);
  });
});

describe('removeById', () => {
  it('Removes element form an array', () => {
    const initialArray = [{ id: 1 }, { id: 2 }];
    const finalArray = [{ id: 1 }];
    const result = removeById(initialArray, 2);
    expect(result).toEqual(finalArray);
  });
});
