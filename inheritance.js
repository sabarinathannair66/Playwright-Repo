//Inheritance -> class is getting the property(const, variables) of another class
//class B is inheriting properties from A
//Class giving properties is Parent class & Class receiving properties is call Child class
//extends -> to achieve inheritance, 'extends' keyword is used
class Animal {
eat(){ //property
    console.log("animal is eating")
}
}
class Dog extends Animal {
    bark(){
        console.log("dog is barking")
    }
}
const child = new Dog() // only creating 1 object when using extends -> or else would create 'const child 2 = new Animal'
child.eat() //inherited the eat function into the Child class
child.bark()