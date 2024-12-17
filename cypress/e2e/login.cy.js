///<reference types="cypress"/>

//funcionalidade
describe('Login', ()=>{

    const tela = ['iphone-6'] //, 'iphone-x','macbook-16']
    
    tela.forEach(element => {

        beforeEach(() =>{

        cy.viewport(element)
        cy.visit('/login')
    })
    //cenarios de testes

    /// LOGIN COM SENHA INVÁLIDA
    it('Login com senha errada', () => {
        
        
        // Dado
        cy.get('#user').type('eduardo@qazando.com')
        cy.get('#password').type('12345')
        
        // Quando
        cy.get('#btnLogin').click()
        
        //Então
        cy.get('.invalid_input')
        .should('have.text', 'Senha inválida.')
        .should('be.visible')

    })

    ///LOGIN COM E-MAIL INVÁLIDO
    it('Login com email inválido', () => {
        
        
        // Dado
   
        cy.get('#user').type('sjldfkasçdfl@htmai.com')
        cy.get('#password').type('123456')
        
       // Quando
        cy.get('#btnLogin').click()
        //Então

        cy.get('.invalid_input')
        .should('have.text', 'E-mail inválido.')
        .should('be.visible')

    })

    ///LOGIN COM SENHA VAZIA
    it('Login com senha vazia', () => {
        
        
        // Dado
    
        cy.get('#user').type('eduardo@qazando.com')
            

        // Quando
        cy.get('#btnLogin').click()
        //Então

        cy.get('.invalid_input')
        .should('have.text', 'Senha inválida.')
        .should('be.visible')

    })

    ///LOGIN COM E-MAIL VAZIO

    it('Login com email vazio', () => {
        
        
        // Dado
    
        cy.get('#password').type('123456')
        

        // Quando
        cy.get('#btnLogin').click()
        //Então

        cy.get('.invalid_input')
        .should('have.text', 'E-mail inválido.')
        .should('be.visible')

    })

    it('Login com campos vazios', () => {
    
        // Quando
        cy.get('#btnLogin').click()
        //Então

        cy.get('.invalid_input')
        .should('have.text', 'E-mail inválido.')
        .should('be.visible')

    })

});

})