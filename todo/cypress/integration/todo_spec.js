describe('Sanity test', () => {
  it('expects true to be true', () => {
    expect(true).to.equal(true);
  });
});

describe('Todo UI', () => {
  beforeEach(() => cy.visit('http://localhost:1234/'));
  it('Renders correct page header', () => {
    cy.contains('TODO');
  });


  it('Renders 2 placeholder todos correctly', () => {
    cy.contains('Completed: 0 Incomplete: 2');
    cy.get('ul').find('li').should('have.length', 2);
  });

  it('Deletes a todo on delete click', () => {
    cy.get('#deleteButton_todoName').click();
    cy.contains('Completed: 0 Incomplete: 1');
    cy.get('ul').find('li').should('have.length', 1);
  });
});