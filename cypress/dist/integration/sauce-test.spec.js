/// <reference types= "cypress"/>
import { saucepage } from "../src/pages/sauce-page";
var saucepages = new saucepage();
// Cypress.on('uncaught:exception', (err) => {
//     return false
//    })
// beforeEach(() => {
//         saucepages.goToPage();
// });
describe('login sauce', function () {
    it('go to page login', function () {
        saucepages.goToPage();
    });
    it('type user', function () {
        cy.get('[data-test=username]').type("standard_user");
    });
    it('type password', function () {
        cy.get('[data-test=password]').type("secret_sauce{enter}");
    });
    it('wait for up elements (max 4000ms)', function () {
        cy.get('#react-burger-menu-btn').should('be.visible');
        cy.get('#item_1_img_link > .inventory_item_img').should('be.visible');
        cy.get('.peek').should('be.visible');
    });
    it('chack equl list', function () {
        cy.get('#react-burger-menu-btn').click();
        saucepages.compareMenuOptionsToList();
    });
    // it('log out', () => {
    //     cy.get('#logout_sidebar_link').click();
    // });
});
