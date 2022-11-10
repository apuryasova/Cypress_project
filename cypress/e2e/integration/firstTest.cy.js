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

  it('Using Get with Find and Eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open/')
    cy.get('tbody').find('td').find('div').find('button').eq('0')
  })

  it.only('Using Get with Find and Eq', () => {
    cy.viewport(1920, 1000)
    cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
    cy.get('nav').find('ul.scrollactive-nav').find('li').find('a').eq(0)
  })

  it('By Contains name', () => {
        cy.viewport(1800, 1000)
        cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
        cy.get('*[class^="text-gray-500 dark:text-gray-300"]')
      })


      // it.only('Using Get with Find and Eq', () => {
      //   cy.viewport(1920, 1000)
      //   cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
      //   cy.get('aside').find('div').find('ul').find('div').find('li').find('a').eq(20)
      // })

      // it.only('Using Get with Find and Eq', () => {
      //   cy.viewport(1920, 1000)
      //   cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
      //   cy.get('nav').find('div').find('a').eq(3)
      // })