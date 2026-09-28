//examples of function
//

//non parameterized 

function greet()
{
    console.log("hello")
}
greet() //function calling or function invoking

//functions to add numbers

function add()
{
    let a=10
    let b=30
    let result=a+b
    console.log(result)

}

add()

// parameterized function

function student(name)  // parameter add in the function
{

console.log(name)

}
student("Nandu")

//return type function

function sub(x,y)
{

 return x + y   

}

let result = sub(40,10)

console.log(result)

//arrow function 
//non parameterised arrow function 

const javascript =()=>
{
    console.log("learning javascript")
}
javascript()

//parameterised arrow function

const multiple =(a,b)=>
{
    let result = a * b
    console.log(result)
}

multiple(5,5)

//arrow function with return type

const division =(j,k)=>
{
    return j / k
}


console.log(division (20,4))

//default parameter

function guest(guestname="guest")
{
    console.log("hello"+guestname)
}
guest()

//Anonymous function -> function without a name & called by object
let multi = function(a,b){  //creating an object & holds the value
    return a*b
}
console.log(multi(10,2))