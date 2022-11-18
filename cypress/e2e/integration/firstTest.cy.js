/// <reference types = "Cypress"/>


 // type

 it(('tupe', ()=>{
  cy.visit('https://next.privat24.ua/mobile?lang=en')
  .get('[data-qa-node="phone-number"]')
  .type(112233344)
 }))