/// <reference types="cypress"/>

describe('Funcionalidade Cadastro de Membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')

    cy.get('#signup-firstname').type('Joshua')
    cy.get('#signup-lastname').type('Dias')
    cy.get('#signup-email').type('joshua3@test.com')
    cy.get('#signup-phone').type('11990193440')
    cy.get('#signup-password').type('S@123456789')

    cy.get('#signup-button').click()

    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  })
})

  describe('Funcionalidade  recomendações', () => {
    it ('Deve verificar as recomendações',() =>{
      cy.visit('http://127.0.0.1:8080/')

      cy.get('#recommendations-section').should('contain','The Matrix')
      cy.get('#recommendations-section').should('contain','Interstellar')
      cy.get('#recommendations-section').should('contain','The GodFather')
      cy.get('#recommendations-section').should('contain','Inception')
      cy.get('#recommendations-section').should('contain','Jurassic Park')
    }) 
  })