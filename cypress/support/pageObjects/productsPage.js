/// <reference types="cypress" />

export class ProductsPage {

    elements = {
        addBackpack: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        removeBackpack: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        addRedShirt: () => cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'),
        removeRedShirt: () => cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]'),
        shoppingCartButton: () => cy.get('[data-test="shopping-cart-link"]'),
        cartBadgeNumber: () => cy.get('[data-test="shopping-cart-badge"]')
    };

    cartButtonExists(){
        this.elements.shoppingCartButton().should("be.visible");  
    };

    clickCartButton(){
        this.elements.shoppingCartButton().click();  
    };

    addBackpackToCart(){
        this.elements.addBackpack().click();        
    };

    verifyRemoveBackpackButton(){
        this.elements.removeBackpack().should("be.visible");  
    };

    addRedShirtToCart(){
        this.elements.addRedShirt().click();        
    };

    verifyRemoveRedShirtButton(){
        this.elements.removeRedShirt().should("be.visible");  
    };

}