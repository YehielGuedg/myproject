/// <reference types= "cypress"/>

export default class BasePage {


    constructor() {}

    goToPage(pageUrlPath:string = '/') {
        cy.visit(pageUrlPath);
    }
}