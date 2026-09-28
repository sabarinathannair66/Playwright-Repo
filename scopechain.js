//Scope Chain -> if variable is not found in the scope, JS

let name = "Nandu"  //global scope
function outer(){
    let age = 20  //outer function scope
function inner(){
    let city = "Paris" //inner function scope
    console.log(name)  //checks in the inner scope
    console.log(age)  
    console.log(city)
}
inner()
}
outer()