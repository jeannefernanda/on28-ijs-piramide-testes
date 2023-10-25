describe('Testar range', () =>{
    it('Atualizar o valor do range a mover o slider', () =>{
        cy.visit('index.html')
        cy.get('input[type="range"]')
        .invoke('val', 99)
        .trigger('change')

        cy.get('p')
        .should('have.text', '99')
    })
})