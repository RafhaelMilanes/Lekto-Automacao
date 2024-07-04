/// <reference types="cypress"/>

describe("Login Admin.Stg", () => {
  
  it("Deve preencher os campos de Login e Senha e entrar no Admin", function () {
    cy.visit("https://login.stg.lekto.com.br/?returnUrl=https:%2F%2Fadmin.stg.lekto.com.br%2F")

    cy.get('#username').type(Cypress.env('EMAIL'))
    cy.get('#password').type(Cypress.env('PASSWORD'))
    cy.get('.ant-btn').click()
      
    cy.url().should('eq', 'https://admin.stg.lekto.com.br/')
    
    cy.visit('https://admin.stg.lekto.com.br/')
  });

  it("Deve cadastrar Componentes", function(){
    cy.get(':nth-child(1) > .ant-menu-submenu-title > .menu-container').click()
    cy.contains('Componentes').click()

    cy.get('.ant-btn > .ng-star-inserted').click()
    cy.wait(6000)
  })

  it("Deve Preencher os campos", function(){
    cy.get(':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type('Componente Cypress 001')
    cy.get(':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type('ess')
    cy.get('[style="margin-bottom: 0px;"] > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').type('Uma breve descrição do componente cadastrado.')
    cy.get('.ant-modal-footer > .ant-btn-primary').click()
  })
});