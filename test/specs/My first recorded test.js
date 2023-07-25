describe("My first recorded test", () => {
  it("tests My first recorded test", async () => {
    await browser.setWindowSize(725, 616)
    await browser.url("https://the-internet.herokuapp.com/login")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    //await browser.$("aria/This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.").click()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
   // await browser.$("aria/This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.").click()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#password").click()
    await browser.$("#password").setValue("SuperSecretPassword!")
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    // // await browser.$("aria/Logout").click()
    // // await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    // await browser.url("https://www.google.com/search?q=chrome+web+store&oq=chrome+web+store&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMgcIAhAAGIAEMgcIAxAAGIAEMgYIBBBFGEEyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg5NDExajBqN6gCALACAA&sourceid=chrome&ie=UTF-8")
    // await expect(browser).toHaveUrl("https://www.google.com/search?q=chrome+web+store&oq=chrome+web+store&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMgcIAhAAGIAEMgcIAxAAGIAEMgYIBBBFGEEyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg5NDExajBqN6gCALACAA&sourceid=chrome&ie=UTF-8")
    // await browser.switchToFrame(
    //   await browser.$('iframe[src="https://www.google.com/search?q=chrome+web+store&oq=chrome+web+store&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMgcIAhAAGIAEMgcIAxAAGIAEMgYIBBBFGEEyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg5NDExajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"]')
    //)
    await browser.$("aria/ Chrome Web Store google.com https://chrome.google.com › webst...").click()
    await expect(browser).toHaveUrl("https://chrome.google.com/webstore")
    await browser.switchToFrame(
      await browser.$('iframe[src="https://chrome.google.com/webstore"]')
    )
    await browser.$("#searchbox-input").setValue("webdriver")
    await browser.switchToFrame(
      await browser.$('iframe[src="https://chrome.google.com/webstore"]')
    )
    await browser.switchToFrame(
      await browser.$('iframe[src="https://chrome.google.com/webstore"]')
    )
    await browser.switchToFrame(
      await browser.$('iframe[src="https://chrome.google.com/webstore"]')
    )
    await browser.$("#selected-search-option").click()
    await browser.switchToFrame(
      await browser.$('iframe[src="https://chrome.google.com/webstore"]')
    )
    await browser.$("/html/body/div[7]/div[4]/main/div/div[1]/div/div[1]/div[2]/div/div[1]/a/div[3]/div[1]/div[1]/div[2]").click()
    await browser.switchToFrame(
      await browser.$('iframe[src="https://chrome.google.com/webstore"]')
    )
    await browser.$("/html/body/div[7]/div[2]/div/div/div[2]/div[2]/div/div/div/div").click()
  });
});
