const { removeById } = require('../helpers');

describe('removeById', () => {
  it('Removes element form an array', () => {
    const initialArray = [{ id: 1 }, { id: 2 }];
    const finalArray = [{ id: 1 }];
    const result = removeById(initialArray, 2);

    expect(result).toEqual(finalArray);
  });
});