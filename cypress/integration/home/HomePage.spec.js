describe('Home Page', () => {
    it('Goes to home', () => {
        cy.visit('/');

        cy.get('h2').contains('Home');
    });
})