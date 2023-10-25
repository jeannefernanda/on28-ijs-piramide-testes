describe('Element select', () =>{
    beforeEach(() => {
        cy.visit('index.html')
    })

    it('Define estado como como HI', () =>{
        cy.get('#meu-estado').select('HI')
        cy.get('#meu-estado').should('have.value', 'HI')
    })

    it('Define estado como como Nevada', () =>{
        cy.get('#meu-estado').select('Nevada')
        cy.get('#meu-estado').should('have.value', 'NV')
    })

    it('Multiplos valores', () => {
        cy.get('#meus-estados').select(['MA', 'NV', 'HI'])
        cy.get('#meus-estados').invoke('val')
        .should('deep.equal' , ['HI', 'NV', 'MA'])
    })
})