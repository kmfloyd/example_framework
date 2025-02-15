/// <reference types="cypress" />

export class CartPage {

    elements = {
        removeBackpackButton: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        removeRedShirtButton: () => cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]'),
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        continueShoppingButton: () => cy.get('[data-test="continue-shopping"]')
    };

    clickCheckoutButton(){
        this.elements.checkoutButton().click();     
    };

    removeBackpackButtonExists(){
        this.elements.removeBackpackButton().should("be.visible");  
    };

    removeRedShirtButtonExists(){
        this.elements.removeRedShirtButton().should("be.visible");  
    };

    continueShoppingButtonExists(){
        this.elements.continueShoppingButton().should("be.visible");  
    };

}