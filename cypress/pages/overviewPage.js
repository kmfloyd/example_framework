/// <reference types="cypress" />

export class OverviewPage {

    elements = {
        cancelButton: () => cy.get('[data-test="cancel"]'),
        finishButton: () => cy.get('[data-test="finish"]'),
        totalPrice: () => cy.get('[data-test="total-label"]')
    };

    clickFinishButton(){
        this.elements.finishButton().click();     
    };

    cancelButtonExists(){
        this.elements.cancelButton().should("be.visible");  
    };

    verifyTotalPrice(){
        this.elements.totalPrice().should("contain.text", "Total: $49.66");
    };

}