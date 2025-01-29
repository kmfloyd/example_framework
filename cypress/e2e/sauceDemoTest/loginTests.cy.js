/// <reference types="cypress" />

import { LoginPage } from "../../support/pageObjects/loginPage";
import { ProductsPage } from "../../support/pageObjects/productsPage";

beforeEach( () => {
    cy.visit('/')
});

describe('tests for login page', () => {

    let loginPage = new LoginPage();
    let productsPage = new ProductsPage();

    it('logs in with bad credentials, validates error message', () => {
        cy.loginToSauceDemo('standard_user', 'wrong_sauce');
        loginPage.elements.errorMessage().should('be.visible');
        loginPage.clearUsername();
        loginPage.clearPassword();
    });

    it('logs in with correct credentials', () => {
        cy.loginToSauceDemo('standard_user', 'secret_sauce')
        productsPage.cartButtonExists();
      });

  });