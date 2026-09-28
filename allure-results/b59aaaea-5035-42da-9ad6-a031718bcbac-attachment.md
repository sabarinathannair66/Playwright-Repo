# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Successful Login
- Location: tests\login.spec.js:4:6

# Error details

```
TypeError: page.context is not a function
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
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - generic [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: Name (A to Z)
          - combobox [ref=e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e23]:
      - generic [ref=e24]:
        - link [ref=e26] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - link "Sauce Labs Backpack" [ref=e30] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e33]:
            - generic [ref=e34]: $29.99
            - button "Add to cart" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link [ref=e38] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e39]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - link "Sauce Labs Bike Light" [ref=e42] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e45]:
            - generic [ref=e46]: $9.99
            - button "Add to cart" [ref=e47] [cursor=pointer]
      - generic [ref=e48]:
        - link [ref=e50] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e51]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e54] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e57]:
            - generic [ref=e58]: $15.99
            - button "Add to cart" [ref=e59] [cursor=pointer]
      - generic [ref=e60]:
        - link [ref=e62] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - link "Sauce Labs Fleece Jacket" [ref=e66] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e69]:
            - generic [ref=e70]: $49.99
            - button "Add to cart" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - link [ref=e74] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]:
            - link "Sauce Labs Onesie" [ref=e78] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e81]:
            - generic [ref=e82]: $7.99
            - button "Add to cart" [ref=e83] [cursor=pointer]
      - generic [ref=e84]:
        - link [ref=e86] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
        - generic [ref=e88]:
          - generic [ref=e89]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e90] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e93]:
            - generic [ref=e94]: $15.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "Twitter" [ref=e99] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import{test,expect}from '@playwright/test' 
  2  | import { LoginPage } from '../pages/LoginPage'
  3  | import logindata from '../utils/testData.json' with {type:'json'}
  4  | test.only('Successful Login',async({page})=>{
  5  | await page.goto("https://www.saucedemo.com/")
  6  | await page.locator('#user-name').fill('standard_user')
  7  | await page.locator('#password').fill('secret_sauce')
  8  | await page.locator('#login-button').click()
> 9  | await expect(page.locator).toHaveURL('https://www.saucedemo.com/inventory.html')
     |                            ^ TypeError: page.context is not a function
  10 | })
  11 | 
  12 | 
  13 | test('Invalid username',async({page})=>{
  14 | await page.goto("https://www.saucedemo.com/")
  15 | await page.locator('#user-name').fill('standard_users')
  16 | await page.locator('#password').fill('secret_sauce')
  17 | await page.locator('#login-button').click()
  18 | await expect(page.locator('.error-message-container')).toBeVisible()
  19 | })
  20 | 
  21 | test('Invalid password',async({page})=>{
  22 | await page.goto("https://www.saucedemo.com/")
  23 | await page.locator('#user-name').fill('standard_user')
  24 | await page.locator('#password').fill('secret_sauces')
  25 | await page.locator('#login-button').click()
  26 | await expect(page.locator('.error-message-container')).toBeVisible()
  27 | })
  28 | 
  29 | 
  30 | test('Invalid Login',async({page})=>{
  31 | await page.goto("https://www.saucedemo.com/")
  32 | await page.locator('#user-name').fill('standard_users')
  33 | await page.locator('#password').fill('secret_sauces')
  34 | await page.locator('#login-button').click()
  35 | await expect(page.locator('.error-message-container')).toBeVisible()
  36 | 
  37 | })
  38 | 
  39 | 
  40 | // JSON examples
  41 | 
  42 | test('Successful Login using JSON',async({page})=>{
  43 | const loginPage = new LoginPage(page)
  44 | const usernamevalue = logindata.validusername
  45 | const passwordvalue = logindata.validpassword
  46 | const checkoutname = logindata.checkoutname
  47 | const checkoutsurname= logindata.checkoutsurname
  48 | const checkoutzip= logindata.checkoutzip
  49 | await loginPage.navigateToApplication()
  50 | await loginPage.userLogin(usernamevalue,passwordvalue)
  51 | await loginPage.validateloginpage()
  52 | 
  53 | })
  54 | test('Invalid username login using JSON',async({page})=>{
  55 | const loginPage = new LoginPage(page)
  56 | const usernamevalue = logindata.invalidusername
  57 | const passwordvalue = logindata.validpassword
  58 | await loginPage.navigateToApplication()
  59 | await loginPage.userLogin(usernamevalue,passwordvalue)
  60 | await loginPage.validateloginerror()
  61 | })
  62 | test('Invalid password login using JSON',async({page})=>{
  63 | const loginPage = new LoginPage(page)
  64 | const usernamevalue = logindata.validusername
  65 | const passwordvalue = logindata.invalidpassword
  66 | await loginPage.navigateToApplication()
  67 | await loginPage.userLogin(usernamevalue,passwordvalue)
  68 | await loginPage.validateloginerror()
  69 | })
  70 | test('Invalid login using JSON',async({page})=>{
  71 | const loginPage = new LoginPage(page)
  72 | const usernamevalue = logindata.invalidusername
  73 | const passwordvalue = logindata.invalidpassword
  74 | await loginPage.navigateToApplication()
  75 | await loginPage.userLogin(usernamevalue,passwordvalue)
  76 | await loginPage.validateloginerror()
  77 | })
```