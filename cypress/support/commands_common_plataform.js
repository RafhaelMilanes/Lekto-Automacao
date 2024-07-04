// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- Login Plataforma
Cypress.Commands.add('loginPlataforma', (user, password) => {
    cy.get('input[name="username"]').type(user);
    //cy.get(':nth-child(1) > .sc-fNGOfv').type(user);
    cy.get('input[name="password"]').type(password, { log: false });
    // cy.get('.sc-gvIEuo').click();
    cy.get('button[type="submit"]').click()
    cy.get('.css-173lhjd > .MuiBox-root > .MuiTypography-root').contains(Cypress.env('NOME'));
});
