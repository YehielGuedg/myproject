export interface entertainmentLocatorsIntrfc {
    "theInnerMainMenu": string,
    "menuSingleOptions": string,
    "user": string,
    "password": string,
    "login": string,
    "menuBtn":string,
    "img1":string,
    "peek":string,
    "logout":string
}


export const saucelector: entertainmentLocatorsIntrfc = {
    "theInnerMainMenu": '.bm-menu>nav',
    "menuSingleOptions": "li>a",
    "user": "[data-test=username]",
    "password":"[data-test=password]",
    "login": '[data-test=login-button]',
    "menuBtn": '#react-burger-menu-btn',
    "img1": '#item_1_img_link > .inventory_item_img',
    "peek": '.peek',
    "logout":'#logout_sidebar_link'
}