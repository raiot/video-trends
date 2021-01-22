const { inRange } = require("cypress/types/lodash");

describe('Favorites Page', () => {
    it('Goes to favorites', () => {
        cy.visit('/favorites');

        cy.get('h2').contains('favorites');
    });
});