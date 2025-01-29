/// <reference types="cypress" />

export class CheckoutPage {

    elements = {
        firstName: () => cy.get('[data-test="firstName"]'),
        lastName: () => cy.get('[data-test="lastName"]'),
        zip: () => cy.get('[data-test="postalCode"]'),
        cancelButton: () => cy.get('[data-test="cancel"]'),
        continueButton: () => cy.get('[data-test="continue"]')
    };

    clickContinueButton(){
        this.elements.continueButton().click();     
    };

    cancelButtonExists(){
        this.elements.cancelButton().should("be.visible");  
    };

}