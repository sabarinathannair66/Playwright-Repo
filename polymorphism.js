//Polymorphism -> same methods performing different actions in different classes 
//class will be related with inheritance
//methods are defined within a class or object
class Animal{
    sound(){     //method used in class
        console.log("animal makes a sound")
    }
}
class Dog extends Animal{
    sound(){
        console.log("dog barks")
        super.sound() //super keyword to access both immediate above Parent & Child class
    }
}
class Cat extends Animal {
    sound(){
        console.log("cat makes sound")
    }
} 
const child = new Dog()
child.sound()

const child2 = new Cat()
child2.sound()

