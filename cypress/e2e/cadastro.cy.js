/// <reference types="cypress"/>

describe('Funcionalidade Cadastro de Membros', () => {

  beforeEach(() =>{
    cy.visit('/')
  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `joshua${Date.now()}@test.com`
    cy.preencherCadastro('Joshua', 'Dias', email, 11990193440, 'S@12345656.')
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro com nome inválido',() =>{
    var email = `joshua${Date.now()}@test.com`
    cy.preencherCadastro('Joshua07', 'Araujo', email, '1990193440', 'S@111233455.')
    cy.get('#signup-response').should('contain','"message":"Nome deve conter apenas caracteres alfabéticos, acentuados e espaços"')
  })

  it.only('Deve validar mensagem de erro com sobrenome inválido',() =>{
    var email = `joshua${Date.now()}@test.com`
    cy.preencherCadastro('Joshua', 'Araujo112', email, '11990193440', 'S@111233455.')
    cy.get('#signup-response').should('contain','Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Deve validar mensagem de erro com telefone invalido',() =>{
    var email = `joshua${Date.now()}@test.com`
    cy.preencherCadastro('Joshua', 'Araujo', email, '1990193440te', 'S@111233455.')
    cy.get('#signup-response').should('contain','Telefone deve conter apenas números')
  })

  it('Deve validar mensagem de erro com senha fraca',() =>{
    var email = `joshua${Date.now()}@test.com`
    cy.preencherCadastro('Joshua', 'Araujo', email, '1990193440', '111233455')
    cy.get('#signup-response').should('contain','Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
  })
})
