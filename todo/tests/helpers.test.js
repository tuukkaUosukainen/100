const { removeById, addNewTodo, getCompletedTodoData } = require('../helpers');

describe('addNewTodo', () => {
  it('Adds a new todo to todo list', () => {
    const initialArray = [];
    const finalArray = [{ id: 1 }];
    const result = addNewTodo(initialArray, { id: 1 });
    expect(result).toEqual(finalArray);
  });
});

describe('removeById', () => {
  it('Removes todo from todo list', () => {
    const initialArray = [{ id: 1 }, { id: 2 }];
    const finalArray = [{ id: 1 }];
    const result = removeById(initialArray, 2);
    expect(result).toEqual(finalArray);
  });
});

describe('getSumOf', () => {
  // Perhaps refactor to two functions?
  it('returns sum of completed and not completed todos', () => {
    const todos = [{ completed: true }, { completed: true }, { completed: false }];
    const [sumOfCompleted, sumOfNotCompleted] = getCompletedTodoData(todos, 'completed');
    expect(sumOfCompleted).toBe(2);
    expect(sumOfNotCompleted).toBe(1);
  });
});
