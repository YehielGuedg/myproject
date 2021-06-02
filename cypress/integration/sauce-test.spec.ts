/// <reference types= "cypress"/>

import { saucepage } from "../src/pages/sauce-page"
import BasePage from "../src/pages/base-page";

const saucepages = new saucepage();
const basePage:BasePage = new BasePage();
// Cypress.on('uncaught:exception', (err) => {
//     return false
//    })


let myLoginInfo: any;
describe('login sauce', () => {


    before( () => {
        
        cy.fixture('info.json').then(i => myLoginInfo = i);
        basePage.goToPage();
        cy.log('entered website')
        
    });
    
    it('tring login with invalid user and password', () => {
        saucepages.userPassword('invalid_user','invalid_password');
        saucepages.invalidDataErrorMsg();
    });

    it('type user & password', () => {

        saucepages.userPassword(myLoginInfo.user, myLoginInfo.password);

    });
    

    it('wait for up elements (max 4000ms)', () => {
        saucepages.waitForElemnts();
    });

    it('chack equl list', () => {
        
        saucepages.compareMenuOptionsToList();
   
    });

    it('log out', () => {
        saucepages.logout();
    });
    

});