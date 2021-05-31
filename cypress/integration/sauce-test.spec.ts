/// <reference types= "cypress"/>

import { saucepage } from "../src/pages/sauce-page"
const saucepages = new saucepage();

// Cypress.on('uncaught:exception', (err) => {
//     return false
//    })



describe('login sauce', () => {
    it('go to page login', () => {
        saucepages.goToPage();
        
    });
    
    it('type user & password', () => {

        saucepages.userPassword();

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