/// <reference types= "cypress"/>

import { BasePage } from './base-page';

export class ResultsPage extends BasePage {
    constructor() {
        super();
    }

    isAtLeastOneResults() {
        // make sure we have at least 1 results on the page
        cy.get('.searchCenterMiddle').find('li').its('length').should('be.gte', 1);
    }
}