/// <reference types="cypress" />

export class LoginPage {

    elements = {
        userNameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]'),
    };

    enterUsername(username){
        this.elements.userNameInput().type(username);  
    };

    clearUsername(){
        this.elements.userNameInput().clear();        
    };

    enterPassword(password){
        this.elements.passwordInput().type(password);        
    };

    clearPassword(){
        this.elements.passwordInput().clear();        
    };

    clickLoginButton(){
        this.elements.loginButton().click();        
    };

    login(username, password){
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
    };

}