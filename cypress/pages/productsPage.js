/// <reference types="cypress" />

export class ProductsPage {

    elements = {
        hamburgerIcon: () => cy.get('[data-test="open-menu"]'),
        addBackpack: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        removeBackpack: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        addBikeLight: () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),
        removeBikeLight: () => cy.get('[data-test="remove-sauce-labs-bike-light"]'),
        addBoltTshirt: () => cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'),
        removeBoltTshirt: () => cy.get('[data-test="data-test="remove-sauce-labs-bolt-t-shirt"]'),
        addFleeceJacket: () => cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]'),
        removeFleeceJacket: () => cy.get('[data-test="remove-sauce-labs-fleece-jacket"]'),
        addOnesie: () => cy.get('[data-test="add-to-cart-sauce-labs-onesie"]'),
        removeOnesie: () => cy.get('[data-test="remove-sauce-labs-onesie"]'),
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