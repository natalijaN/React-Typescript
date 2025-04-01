describe('The Add Vehicle Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/addvehicle');
  });

  it('should properly display the correct title and input form', () => {
    cy.contains("Add Vehicle");
    cy.get('input[name="image').should('exist');
    cy.get('input[name="title').should('exist');
    cy.get('input[name="description').should('exist');
    cy.get('input[name="cost').should('exist');
    cy.contains('button', 'Submit')
  });


  it('should console.log messages, when clicked on Submit button (Observers Design Pattern Implemented)', () => {
    cy.contains('button', 'Submit').click();
    cy.window().then((win) => {
        cy.spy(win.console, 'log').as('consoleLog');
      });
  
      cy.contains('button', 'Submit').click(); 
  
      cy.get('@consoleLog').should('be.calledWith', 'New product added to the store');
      cy.get('@consoleLog').should('be.calledWith', 'Notifying observers...');
      cy.get('@consoleLog').should('be.calledWith', 'New vehicle added to the store, updating list of vehicles...');
      cy.get('@consoleLog').should('be.calledWith', 'New vehicle added to the store, I have to go check it out...');
});
})