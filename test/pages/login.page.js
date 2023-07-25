const loginPage = require("../pageobjects/login.page")
const { login } = require("../pageobjects/login.page")

class LoginPage{
    usernameTextbox(){
        return $('#username')
    }
    get passwordTextbox(){
        return $('#password')
    }
    get loginButton(){
        return $('button[type="submit"]')
    }
    get loginMessage (){
        return $('#flash')
    }
    async login(username, passwword){
        await this.usernameTextbox.setValue('username')
        await this.usernameTextbox.setValue('password')
        await this.loginButton.click()
    }
    async checkMessage(msg){
        await expect(this.loginMessage.getText()).toHaveTextContaining(msg)
    } 

        }
    module.exports = new loginPage()
    
