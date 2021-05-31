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
import { BasePage } from "./base-page";
import { saucelector } from "./sauce-page-locators";
var saucepage = /** @class */ (function (_super) {
    __extends(saucepage, _super);
    function saucepage() {
        var _this = _super.call(this) || this;
        _this.saucepageUrl = "https://www.saucedemo.com/";
        return _this;
    }
    saucepage.prototype.goToPage = function () {
        cy.visit(this.saucepageUrl);
    };
    saucepage.prototype.compareMenuOptionsToList = function () {
        cy.fixture('sauce-info.json').then(function (menuOptions) {
            var menuOptionsArr = menuOptions.arr;
            cy.get(saucelector.theInnerMainMenu).eq(0).as('allMenuOptions');
            cy.get('@allMenuOptions').find('a').each(function (elem, i) {
                expect(elem.text()).equal(menuOptionsArr[i]);
            });
        });
    };
    return saucepage;
}(BasePage));
export { saucepage };
