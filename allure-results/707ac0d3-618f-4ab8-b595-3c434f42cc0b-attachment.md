# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addtocart.spec.js >> Adding inventory to cart
- Location: tests\addtocart.spec.js:7:5

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - generic [ref=e12]: "1"
      - generic [ref=e15]: "Checkout: Your Information"
    - generic [ref=e19]:
      - generic [ref=e20]:
        - textbox "First Name" [ref=e22]
        - textbox "Last Name" [ref=e24]
        - textbox "Zip/Postal Code" [ref=e26]
      - generic [ref=e28]:
        - button [ref=e29] [cursor=pointer]:
          - img "Go back" [ref=e30]
          - text: Cancel
        - button "Continue" [ref=e31] [cursor=pointer]
  - contentinfo [ref=e32]:
    - list [ref=e33]:
      - listitem [ref=e34]:
        - link "Twitter" [ref=e35] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e36]:
        - link "Facebook" [ref=e37] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e38]:
        - link "LinkedIn" [ref=e39] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e40]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import{expect}from '@playwright/test' 
  2  | 
  3  | export class InventoryPage {
  4  |     constructor(page){
  5  |         this.page=page  
  6  |         this.inventoryonesie=page.locator('#add-to-cart-sauce-labs-onesie')
  7  |         this.cartbutton=page.locator('.shopping_cart_link')
  8  |         this.checkoutbutton=page.locator('#checkout')
  9  |         this.checkoutName = page.locator('#first-name')
  10 |         this.checkoutSurname = page.locator('#last-name')
  11 |         this.checkoutzip = page.locator('#postal-code')
  12 |         this.checkoutcontinue = page.locator('#continue')
  13 |         this.checkoutfinished = page.locator('#finish')
  14 |         
  15 |     }
  16 | 
  17 |      async addToCart(checkoutname,checkoutsurname,checkoutzip){
  18 |         await this.inventoryonesie.click()
  19 |         await this.cartbutton.click()
  20 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html')
  21 |         await this.checkoutbutton.click()
  22 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
> 23 |         await this.checkoutName.fill(checkoutname)
     |                                 ^ Error: locator.fill: value: expected string, got undefined
  24 |         await this.checkoutSurname.fill(checkoutsurname)
  25 |         await this.checkoutzip.fill(checkoutzip)
  26 |         await this.checkoutcontinue.click()
  27 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
  28 |         await this.checkoutfinished.click()
  29 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
  30 |         
  31 | 
  32 |     }}
```