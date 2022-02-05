const { removeById, addNewTodo, renameTodo, findById } = require('../helpers');

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

describe('renameTodo', () => {
  it('Renames existing todo', () => {
    const initialTodo = { name: 'name' };
    const newName = 'newName';
    const finalTodo = { name: 'newName' };
    const result = renameTodo(initialTodo, newName);
    expect(result).toEqual(finalTodo);
  });
});

describe('findById', () => {
  it('Finds a todo item from todo list', () => {
    const todos = [{ id: 1 }, { id: 2 }];
    const foundTodo = { id: 2 };
    const result = findById(todos, 2);
    expect(result).toEqual(foundTodo);
  });
});
