/// <reference types = "Cypress"/>

// describe('My First Tests', () => {
//     it('By ID', () => {
//       cy.visit('https://www.facebook.com/')
//       cy.get('#email')
//     })
//   })

//   it('By Class', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
//     cy.get('.DocSearch-Button-Placeholder')
//   })

//   it('By Tag', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
//     cy.get('nav')
//   })

//   it('By Tag value', () => {
//     cy.visit('https://www.facebook.com/')
//     cy.get('[name="pass"]')
//   })
  
//   it('By Diffrent Tag', () => {
//     cy.visit('https://www.facebook.com/')
//     cy.get('[role="button"][href="#"]')
//   })

//   it('By Diffrent Types', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
//     cy.get('button[type="button"][aria-label="Search"]')
//   })

//   it.only('By Contains name', () => {
//     cy.visit('https://next.privat24.ua/')
//     cy.get('*[class^="card"]')
//   })
  
//   ;

//Comment 2

  it('Using Get with Find and Eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open/')
    cy.get('tbody').find('td').find('div').find('button').eq('0')
  })

  it.only('Using Get with Find and Eq', () => {
    cy.viewport(1920, 900)
    cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
    cy.get('nav').find('ul.scrollactive-nav').find('li').find('a').eq(0)
  })

 