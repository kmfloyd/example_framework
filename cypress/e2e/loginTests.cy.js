/// <reference types="cypress" />

import { LoginPage } from "../pages/loginPage";
import { ProductsPage } from "../pages/productsPage";

beforeEach( () => {
    cy.visit('/')
});

describe('tests for login page', () => {

    let loginPage = new LoginPage();
    let productsPage = new ProductsPage();

    it.only('validates locked out error message', () => {
        cy.loginToSauceDemo('locked_out_user', 'secret_sauce');
        loginPage.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
        loginPage.clearUsername();
        loginPage.clearPassword();

        cy.loginToSauceDemo('standard_user', 'wrong_sauce');
        loginPage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
        loginPage.clearUsername();
        loginPage.clearPassword();

        cy.loginToSauceDemo('standard_user', 'secret_sauce')
        productsPage.cartButtonExists();
      });

  });