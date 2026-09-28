//Customer Error
class ZeroDivError extends Error {
    constructor(message){
        super(message)      //used to refer immediate parent class object
        this.name= "ZeroDivError"
    }
}
function div(a,b){
    if(b===0){
    throw new ZeroDivError("Cannot div by 0") //pre-defined class
        
    }
        return a/b
}
try{
console.log(div(10,0))
}
/*catch(error){                  // catch handles the error from try block
    console.log(error.message)  // create varaible error -> fetches the message from Error
    console.log(error.name)
}*/
finally {
    console.log("Execution successfully completed")
}