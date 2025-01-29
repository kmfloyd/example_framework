/// <reference types="cypress" />

export class LoginPage {

    loginPageElements = {
        userNameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]'),
    };

    enterUsername(username){
        this.loginPageElements.userNameInput().type(username);  
    };

    clearUsername(){
        this.loginPageElements.userNameInput().clear();        
    };

    enterPassword(password){
        this.loginPageElements.passwordInput().type(password);        
    };

    clearPassword(){
        this.loginPageElements.passwordInput().clear();        
    };

    clickLoginButton(){
        this.loginPageElements.loginButton().click();        
    };

    login(username, password){
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
    };

}