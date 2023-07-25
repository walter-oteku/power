describe('Search functionality', function () {
    it('My first Test', async () => {
        await browser.url('https://google.com')
        await $('[name="q"]').setValue('webdriverIO')
        await $('[name="btnK"]').click()
        //await browser.pause(80000)//
        await browser.keys('Enter')
    })
})