/// <reference types="cypress" />

export class ProductsPage {

    productPageElements = {
        addSauceLabsBackpack: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        removeSauceLabsBackpack: () => cy.get('[data-test="remove-sauce-labs-backpack"]'),
        shoppingCartButton: () => cy.get('[data-test="shopping-cart-link"]'),
        cartBadgeNumber: () => cy.get('[data-test="shopping-cart-badge"]')
    };

    cartButtonExists(){
        this.productPageElements.shoppingCartButton().should("be.visible");  
    };

    addBackpackToCart(){
        this.productPageElements.addSauceLabsBackpack().click();        
    };

    verifyRemoveButton(){
        this.productPageElements.removeSauceLabsBackpack().should("be.visible");  
    };

}