import{test,expect}from '@playwright/test'

test('Get request - fetch users',async({request})=> {
const response=await request.get('https://jsonplaceholder.typicode.com/users/3')
expect(response.ok()).toBeTruthy()
const body=await response.json()  //convert to json
console.log(body)
})

test('Post request - create users',async({request})=> {
const response=await request.post('https://jsonplaceholder.typicode.com/users',{
  data:{
    name:'Nandu Nair',
    username: 'Nandu',
    email: 'nandu@test.com'
}  
})
expect(response.status()).toBe(201)
const body=await response.json()
console.log(body)
})

test('Patch request - partially updating users',async({request})=> {
const response=await request.patch('https://jsonplaceholder.typicode.com/users/1',{
    data:{
        email:'updatedmail@gmail.com'
    }
})
expect(response.status()).toBe(200)
const body=await response.json()
console.log(body)
})


test.only('Put request - update whole user details',async({request})=>{
    const response=await request.put('https://jsonplaceholder.typicode.com/users/1',{
      data:{
         id: 1,
    name: "John Graham",
    username: "John",
    email: "puttest@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 001",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
      }
    })
    expect(response.status()).toBe(200)
    const body=await response.json()
    console.log(body)
})

test.only('Put test - change all the user details',async({request})=>{
    const response=await request.put('https://jsonplaceholder.typicode.com/users/3',{
        data:{
    id: 3,
    name: "Clementine Bauch",
    username: "Nanduuuuuu",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 100",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    }
        }
    })
    expect(response.status()).toBe(200)
    const body=await response.json()
    console.log(body)
})

test('Delete Request',async({request})=>{
    const response=await request.delete('https://jsonplaceholder.typicode.com/users/4')
    expect(response.status()).toBe(200)
})