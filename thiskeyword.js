//Keyword -> 'this' keyword refers to the obeject that is currently executing the function
const person = {
    name:"Tim",
    greet(){
        console.log(this.name) //'this' refers to everything this current object
    }

}
person.greet()