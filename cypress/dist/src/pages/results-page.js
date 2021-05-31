/// <reference types= "cypress"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BasePage } from './base-page';
var ResultsPage = /** @class */ (function (_super) {
    __extends(ResultsPage, _super);
    function ResultsPage() {
        return _super.call(this) || this;
    }
    ResultsPage.prototype.isAtLeastOneResults = function () {
        // make sure we have at least 1 results on the page
        cy.get('.searchCenterMiddle').find('li').its('length').should('be.gte', 1);
    };
    return ResultsPage;
}(BasePage));
export { ResultsPage };
