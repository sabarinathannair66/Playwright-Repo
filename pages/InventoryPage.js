import{expect}from '@playwright/test' 

export class InventoryPage {
    constructor(page){
        this.page=page  
        this.inventoryonesie=page.locator('#add-to-cart-sauce-labs-onesie')
        this.cartbutton=page.locator('.shopping_cart_link')
        
    }

     async addToCart(checkoutname,checkoutsurname,checkoutzip){
        await this.inventoryonesie.click()
        await this.cartbutton.click()
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html')
        

    }}