//Abstraction -> process of hiding internal implementation details and showing only essential functionality to the user
class Atm{
    withdraw(amount){    //method with parameter
    console.log("amount withdrawn")    
    }
} 
const cash = new Atm()  // creating an object
cash.withdraw(50)   //invoke method & give value for parameter