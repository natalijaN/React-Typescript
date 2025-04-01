describe('Header', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    })
    it('should properly display nav items and a button', () => {
        cy.contains("Home");
        cy.contains("Vehicles");
        cy.contains("Our Sugestion");
        cy.contains("Add Vehicle");
        cy.contains("Contact Us");

        cy.contains('button', 'Become member')
    });

    it('should visit Vehicles page when clicked on Vehicles nav link', () => {
        cy.contains("Vehicles").click();
        cy.visit('http://localhost:5173/vehicles');
    });

    it('should visit Home page when clicked on Home nav link', () => {
        cy.contains("Home").click();
        cy.visit('http://localhost:5173/');
    });

    it('should visit Our Sugestion page when clicked on Our Sugestion nav link', () => {
        cy.contains("Our Sugestion").click();
        cy.visit('http://localhost:5173/oursugestion');
    });

    it('should visit Add Vehicle page when clicked on Add Vehicle nav link', () => {
        cy.contains("Add Vehicle").click();
        cy.visit('http://localhost:5173/addvehicle');
    });

    it('should visit Contact Us page when clicked on Contact Us nav link', () => {
        cy.contains("Contact Us").click();
        cy.visit('http://localhost:5173/contactus');
    });

    it('should open Modal, when clicked on "Become member" button', () => {
        cy.contains('button', 'Become member').click();
        cy.contains('Become member modal');
        cy.contains('button', 'Cancel');
        cy.contains('button', 'Confirm').click();
        cy.contains('button', 'Confirm').should('not.exist');
    });

    it('should open Modal, when clicked on "Become member" button, and close the Modal when clicked on "Cancel" button', () => {
        cy.contains('button', 'Become member').click();
        cy.contains('Become member modal');
        cy.contains('button', 'Confirm');
        cy.contains('button', 'Cancel').click();
        cy.contains('Become member modal').should('not.exist');
    });
});