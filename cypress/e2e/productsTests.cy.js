/// <reference types="cypress" />

import { LoginPage } from "../pages/loginPage";
import { ProductsPage } from "../pages/productsPage";

beforeEach( () => {
    cy.visit('/')
});

describe('tests for products page', () => {

    let loginPage = new LoginPage();
    let productsPage = new ProductsPage();

    it.only('logs in, then adds item to cart', () => {
        cy.loginToSauceDemo('standard_user', 'secret_sauce');
        productsPage.cartButtonExists();
        productsPage.addBackpackToCart();
        productsPage.verifyRemoveBackpackButton();
        productsPage.elements.cartBadgeNumber().should('have.text', '1');
    });

});