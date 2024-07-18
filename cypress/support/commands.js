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

Cypress.Commands.add('waitCalculatePageLoad', () => {
    const waitTime = 10000
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://web.superfrete.com/')
    Cypress.log({
        name: 'waitPageLoad',
        message: `Esperando ${waitTime / 1000} segundos antes de iniciar o teste`,
    })
    cy.wait(waitTime)
    cy.intercept('https://sentry.io/*', req => req.destroy())
})