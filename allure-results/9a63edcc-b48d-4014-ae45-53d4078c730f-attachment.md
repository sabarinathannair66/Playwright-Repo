# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Successful Login using JSON
- Location: tests\login.spec.js:42:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/checkout-step-two.html"
Received: "https://www.saucedemo.com/checkout-step-one.html"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.saucedemo.com/checkout-step-one.html"

```

```yaml
- button "Open Menu"
- img "Open Menu"
- text: "Swag Labs 1 Checkout: Your Information"
- textbox "First Name": Nandu
- textbox "Last Name": Nair
- textbox "Zip/Postal Code": "60001"
- button "Go back Cancel":
  - img "Go back"
  - text: Cancel
- button "Continue"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import{expect}from '@playwright/test' 
  2  | 
  3  | export class LoginPage {
  4  |     constructor(page){
  5  |         this.page=page  
  6  |         this.username=page.locator('#user-name')
  7  |         this.password=page.locator('#password')
  8  |         this.loginbutton=page.locator('#login-button') //declare element within the page class
  9  |         this.inventoryonesie=page.locator('#add-to-cart-sauce-labs-onesie')
  10 |         this.cartbutton=page.locator('.shopping_cart_link')
  11 |         this.checkoutbutton=page.locator('#checkout')
  12 |         this.checkoutName = page.locator('#first-name')
  13 |         this.checkoutSurname = page.locator('#last-name')
  14 |         this.checkoutzip = page.locator('#postal-code')
  15 |         this.checkoutfinished = page.locator('#finish')
  16 |     }
  17 |     async navigateToApplication(){   // creating new methods
  18 |         await this.page.goto("https://www.saucedemo.com/")
  19 |     }
  20 |     async userLogin(usernamevalue,passwordvalue){
  21 |         await this.username.fill(usernamevalue)
  22 |         await this.password.fill(passwordvalue)
  23 |         await this.loginbutton.click()
  24 |     }
  25 |     async validateloginpage(){
  26 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
  27 |     }
  28 |     async validateloginerror(){
  29 |         await expect(this.page.locator('.error-message-container')).toBeVisible()
  30 |     }
  31 |         async inventoryselection(checkoutname,checkoutsurname,checkoutzip){
  32 |         await this.inventoryonesie.click()
  33 |         await this.cartbutton.click()
  34 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html')
  35 |         await this.checkoutbutton.click()
  36 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
  37 |         await this.checkoutName.fill(checkoutname)
  38 |         await this.checkoutSurname.fill(checkoutsurname)
  39 |         await this.checkoutzip.fill(checkoutzip)
> 40 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
     |                                 ^ Error: expect(page).toHaveURL(expected) failed
  41 |         await this.checkoutfinish.click()
  42 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
  43 |         
  44 | 
  45 |     }
  46 | }
```