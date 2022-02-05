describe('Sanity test', () => {
  it('expects true to be true', () => {
    expect(true).to.equal(true);
  });
});

describe('Todo UI', () => {
  it('Renders correct page header', () => {
    cy.visit('http://localhost:1234/');
    cy.contains('TODO');
  });
});