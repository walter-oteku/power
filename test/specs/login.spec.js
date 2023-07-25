const loginPage = require('../pageobjects/login.page')
const LoginPage = require('../pages/login.page')

describe('Demo test', () => {
    it('Login Test', async () => {
        await browser.url('http://the-internet.herokuapp.com/login')

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        //await $('#username').setValue('tomsmith')
        //await $('#password').setValue('SuperSecretPassword!')
        //await $('button[type="submit"]').click()
        //await $('#flash').getText()
        //await expect($('#flash')).toHaveTextContaining(
        //'You logged into a secure area!')
    })
})