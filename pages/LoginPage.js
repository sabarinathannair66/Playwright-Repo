import{expect}from '@playwright/test' 

export class LoginPage {
    constructor(page){
        this.page=page  
        this.username=page.locator('#user-name')
        this.password=page.locator('#password')
        this.loginbutton=page.locator('#login-button') //declare element within the page class
        this.inventoryonesie=page.locator('#add-to-cart-sauce-labs-onesie')
        this.cartbutton=page.locator('.shopping_cart_link')
        this.checkoutbutton=page.locator('#checkout')
        
    }
    async navigateToApplication(){   // creating new methods
        await this.page.goto("https://www.saucedemo.com/")
    }
    async userLogin(usernamevalue,passwordvalue){
        await this.username.fill(usernamevalue)
        await this.password.fill(passwordvalue)
        await this.loginbutton.click()
    }
    async validateloginpage(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }
    async validateloginerror(){
        await expect(this.page.locator('.error-message-container')).toBeVisible()
    }
       
}