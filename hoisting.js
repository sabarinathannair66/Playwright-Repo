//Var hoisting
console.log(a)//declaration is done but not assigned to a variable -> return undefined result
var a=10 //only var data type can be hoisted
console.log(a)//returns a result as it is assigned to variable

// cannot do hoisting with let & const data types -> it will be in temporal dead zone(tdz)

//Function Hoisting -> function declaration can be hoisted
//call the function first & then declare

greet() //function calling completed
function greet(){  //declaring the function
    console.log("welcome")
}