describe('Logging In - Basic Auth', () =>{
    it('Quando não passar a auth retorna 401', () =>{
        cy.request({
            url: '/',
            failOnStatusCode: false
        }).its('status').should('equal',401)
    })
})