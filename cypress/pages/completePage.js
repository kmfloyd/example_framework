/// <reference types="cypress" />

export class CompletePage {

    elements = {
        thankYouHeader: () => cy.get('[data-test="complete-header"]'),
        backToHomeButton: () => cy.get('[data-test="back-to-products"]')
    };

    clickBackToHomeButton(){
        this.elements.backToHomeButton().click();     
    };

    thankYouHeaderExists(){
        this.elements.thankYouHeader().should("contain.text", "Thank you for your order!"); 
    };

}