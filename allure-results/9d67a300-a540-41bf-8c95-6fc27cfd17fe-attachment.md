# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Invalid username
- Location: tests\login.spec.js:14:5

# Error details

```
ReferenceError: page is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]: standard_users
      - textbox "Password" [ref=e15]: secret_sauces
      - heading [level=3] [ref=e19]:
        - button [ref=e20] [cursor=pointer]
        - text: "Epic sadface: Username and password do not match any user in this service"
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
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
  9  |     }
  10 |     async navigateToApplication(){   // creating new methods
  11 |         await this.page.goto("https://www.saucedemo.com/")
  12 |     }
  13 |     async userLogin(usernamevalue,passwordvalue){
  14 |         await this.username.fill(usernamevalue)
  15 |         await this.password.fill(passwordvalue)
  16 |         await this.loginbutton.click()
  17 |     }
  18 |     async validateloginpage(){
  19 |         await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
  20 |     }
  21 |     async validateloginerror(){
> 22 |         await expect(page.locator('.error-message-container')).toBeVisible()
     |                      ^ ReferenceError: page is not defined
  23 |     }
  24 | }
```