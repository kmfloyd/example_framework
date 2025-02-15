/// <reference types="cypress" />

import { LoginPage } from "../pages/loginPage";
import { ProductsPage } from "../pages/productsPage";
import { CartPage } from "../pages/cartPage";
import { CheckoutPage } from "../pages/checkoutPage";
import { OverviewPage } from "../pages/overviewPage";
import { CompletePage } from "../pages/completePage";

beforeEach( () => {
    cy.visit('/')
});

describe('tests for login page', () => {

    let loginPage = new LoginPage();
    let productsPage = new ProductsPage();
    let cartPage = new CartPage();
    let checkoutPage = new CheckoutPage();
    let overviewPage = new OverviewPage();
    let completePage = new CompletePage();

    it('logs in, adds item to cart, then checks out', () => {
        // login
        cy.loginToSauceDemo('standard_user', 'secret_sauce')
        // add items to cart
        productsPage.cartButtonExists();
        productsPage.addBackpackToCart();
        productsPage.verifyRemoveBackpackButton();
        productsPage.addRedShirtToCart();
        productsPage.verifyRemoveRedShirtButton();
        productsPage.elements.cartBadgeNumber().should('have.text', '2');
        productsPage.clickCartButton();
        // navigate to cart
        cartPage.removeBackpackButtonExists();
        cartPage.removeRedShirtButtonExists();
        cartPage.continueShoppingButtonExists();
        cartPage.clickCheckoutButton();
        // complete checkout
        checkoutPage.cancelButtonExists();
        checkoutPage.elements.firstName().type('Mike');
        checkoutPage.elements.lastName().type('Floyd');
        checkoutPage.elements.zip().type('90210');
        checkoutPage.clickContinueButton();
        // confirm purchase
        overviewPage.cancelButtonExists();
        overviewPage.verifyTotalPrice();
        overviewPage.clickFinishButton();
        // confirm thank you message
        completePage.thankYouHeaderExists();
        completePage.clickBackToHomeButton();
      });

  });