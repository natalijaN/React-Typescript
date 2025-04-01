describe('The Contact us page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/contactus');
    });

    it('should properly display the correct title and input form', () => {
        cy.contains("CONTACT US for more informations");
        cy.get('input[name="name').should('exist');
        cy.get('input[name="email').should('exist');
        cy.contains('button', 'Submit')
    });

    it('should display messages, if inputs are empty', () => {
        cy.contains('button', 'Submit').click();
        
        cy.contains("Name is required.");
        cy.contains("Email is required.");
    });

    it('should display messages, if only Name input is empty', () => {
        cy.get('input[name="name').should('exist');
        cy.get('input[name="email').should('exist').type('natalija@gmail.com');

        cy.contains('button', 'Submit').click();
        
        cy.contains("Name is required.");
        cy.contains("Email is required.").should('not.exist');
    });
    
    it('should console.log message, when clicked on Submit button', () => {
        cy.contains('button', 'Submit').click();
        cy.window().then((win) => {
            cy.spy(win.console, 'log').as('consoleLog');
          });
      
          cy.contains('button', 'Submit').click(); 
      
          cy.get('@consoleLog').should('be.calledWith', '[ConsoleLogger] Submit user form');
    });
});