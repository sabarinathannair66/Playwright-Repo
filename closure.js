//Closure -> is a function that remembers variables from its outer function after the outer function has finished executing
function outer(){
let name = "Tom"
function inner(){
    console.log(name)
}
return inner
}
const x = outer() //calling the inner function & stored in the x variable -> this is called closure
x()