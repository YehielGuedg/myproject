import { BasePage } from "./base-page";
import { saucelector } from "./sauce-page-locators";
const user = 'standard_user';
const password = 'secret_sauce';

export class saucepage extends BasePage {
    private saucepageUrl: string;

    constructor() {
        super();
        this.saucepageUrl = "https://www.saucedemo.com/";
    }

    goToPage() {
        cy.visit(this.saucepageUrl);
        
    }

    compareMenuOptionsToList() {
        cy.get(saucelector.menuBtn).click();
        cy.fixture('sauce-info.json').then((menuOptions) => {
            let menuOptionsArr = menuOptions.arr;
            cy.get(saucelector.theInnerMainMenu).eq(0).as('allMenuOptions');
            cy.get('@allMenuOptions').find('a').each((elem, i) => {
                expect(elem.text()).equal(menuOptionsArr[i]);
            })
        })
    }

    userPassword() {
        cy.get(saucelector.user).type(user);
        cy.get(saucelector.password).type(password);
        cy.get(saucelector.login).click();
    }

    waitForElemnts() {
        cy.get(saucelector.menuBtn).should('be.visible');
        cy.get(saucelector.img1).should('be.visible');
        cy.get(saucelector.peek).should('be.visible');
    }
    logout() {
        cy.get(saucelector.logout).click();



    }



}