describe('The Our Suggestion Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/oursugestion');
    });
  
    it('should properly display the correct title and suggested cars', () => {
      cy.contains("MORE THAN JUST A CAR.");
      cy.contains("The Classic Reinvented");
      cy.contains("Family-Friendly Sophistication");
      cy.contains("Compact Elegance");
    });
})