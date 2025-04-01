import { mount } from 'cypress/react';

// Add mount to Cypress globally
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);