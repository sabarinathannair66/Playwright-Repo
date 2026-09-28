// OOP's -> helps in organising the code into objects that contain properties & methods
//1.Object Literal Format - most commonly used Object creation technique

const person = {
    name:"Nandu", //key value pair/properties
    age: 32,
    greet(){ //declared a function within the object
        console.log("hello")
    }
}
console.log(person.name)
person.greet() //calling the function inside an object, function needs to be invoke with the object name

//------------------------------------------
//2. new Object() - predefined constructor for creating an object 

const employee = new Object()
employee.name = "Tom"
employee.age = 40
console.log(employee)


//------------------------------------------
//3. Constructor Function - not a format used a lot, might cause confusion
function Car(brand,colour)
{
this.brand=brand
this.colour=colour
console.log(brand,colour)

}

const car1 = new Car("BMW","Blue") //object needs to be created to invoke the class
//constructor & class name will be the same

//------------------------------------------
//4. JSON object - JavaScript Object Notation -- cannot create function within JSON
//Cannot create a function in JSON script & key pairs contain double quotes
const student = {
    "name": "Tim", // key enclosed in double quote then it will run as JSON script
    "age": 22,
    "city": "Berlin"
}
console.log(student)

