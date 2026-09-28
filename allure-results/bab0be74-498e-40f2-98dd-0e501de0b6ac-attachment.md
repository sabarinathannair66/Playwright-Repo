# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api.spec.js >> Put request - update whole user details
- Location: tests\api.spec.js:34:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: [Function status]
```

# Test source

```ts
  1  | import{test,expect}from '@playwright/test'
  2  | 
  3  | test('Get request - fetch users',async({request})=> {
  4  | const response=await request.get('https://jsonplaceholder.typicode.com/users/3')
  5  | expect(response.ok()).toBeTruthy()
  6  | const body=await response.json()  //convert to json
  7  | console.log(body)
  8  | })
  9  | 
  10 | test('Post request - create users',async({request})=> {
  11 | const response=await request.post('https://jsonplaceholder.typicode.com/users',{
  12 |   data:{
  13 |     name:'Nandu Nair',
  14 |     username: 'Nandu',
  15 |     email: 'nandu@test.com'
  16 | }  
  17 | })
  18 | expect(response.status()).toBe(201)
  19 | const body=await response.json()
  20 | console.log(body)
  21 | })
  22 | 
  23 | test('Patch request - partially updating users',async({request})=> {
  24 | const response=await request.patch('https://jsonplaceholder.typicode.com/users/1',{
  25 |     data:{
  26 |         email:'updatedmail@gmail.com'
  27 |     }
  28 | })
  29 | expect(response.status()).toBe(200)
  30 | const body=await response.json()
  31 | console.log(body)
  32 | })
  33 | 
  34 | test('Put request - update whole user details',async({request})=>{
  35 |     const response=await request.put('https://jsonplaceholder.typicode.com/users/1',{
  36 |       data:{
  37 |          id: 1,
  38 |     name: "John Graham",
  39 |     username: "John",
  40 |     email: "puttest@april.biz",
  41 |     address: {
  42 |       street: "Kulas Light",
  43 |       suite: "Apt. 001",
  44 |       city: "Gwenborough",
  45 |       zipcode: "92998-3874",
  46 |       geo: {
  47 |         lat: "-37.3159",
  48 |         lng: "81.1496"
  49 |       }
  50 |     },
  51 |     phone: "1-770-736-8031 x56442",
  52 |     website: "hildegard.org",
  53 |     company: {
  54 |       name: "Romaguera-Crona",
  55 |       catchPhrase: "Multi-layered client-server neural-net",
  56 |       bs: "harness real-time e-markets"
  57 |     }
  58 |       }
  59 |     })
> 60 |     expect(response.status).toBe(201)
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  61 |     const body=await response.json()
  62 | console.log(body)
  63 | })
```