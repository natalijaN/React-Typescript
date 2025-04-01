describe('The Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  })
  it('should properly display the correct title and buttons', () => {
   
    cy.get('[data-testid=cypress-title]').should('exist')
    .should('have.text', "CHOOSE SMART");

    cy.contains("Click on the button to find you car!")

  })

  it('should change the color of the button, when clicked on Toggle Theme button', () => {
    cy.contains("Toggle Theme")
    cy.contains('button', 'Toggle Theme').click().should('have.css', 'background-color')
    .and('eq', 'rgb(16, 185, 129)')
    cy.contains('button', 'Toggle Theme').click().should('have.css', 'background-color')
    .and('eq', 'rgb(110, 231, 183)')
  });

  it('should console.log message, when clicked on Send log to File', () => {
    cy.contains("Send log to File")
   
    cy.window().then((win) => {
      cy.spy(win.console, 'log').as('consoleLog');
    });

    cy.contains('button', 'Send log to File').click(); 

    cy.get('@consoleLog').should('be.calledWith', '[FileLogger] Send log to a file!');
  });

  it('should display a car properties, when clicked on a "FInd your dream car" button', () => {
    cy.contains("Find your dream car")
   
    cy.contains('button', 'Find your dream car').click(); 
    cy.contains("AMERICAN HONDA MOTOR CO., INC.")

    cy.contains('button', 'Find your dream car').click(); 
    cy.contains("HONDA DE MEXICO, S.A. DE C.V.")

    cy.contains('button', 'Find your dream car').click(); 
    cy.contains("HONDA MOTOR CO., LTD.")

    cy.contains('button', 'Find your dream car').click(); 
    cy.contains("No more cars!")
  });
})