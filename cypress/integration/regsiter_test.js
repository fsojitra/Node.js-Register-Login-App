// regsiter_test.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5000/')
    })

    it('displays two todo items by default', () => {
        // We use the `cy.get()` command to get all elements that match the selector.
        // Then, we use `should` to assert that there are two matched items,
        // which are the two default items.
        cy.get('#form1 input[name="email"]').type(`ไทย@ไทยเที่ยวไทย.ไทย`)
        cy.get('#form1 input[name="username"]').type(`nongdark46`)
        cy.get('#form1 input[name="password"]').type(`admin1234`)
        cy.get('#form1 input[name="passwordConf"]').type(`admin1234`)
        cy.get('#form1 input[type="submit"]').click()
      })

});