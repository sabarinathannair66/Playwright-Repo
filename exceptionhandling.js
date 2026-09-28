/*
Try block -> code which may create an error in the future in the try block
          -> 'Try block' cannot be created alone, it needs a 'catch block' or 'finally block'
'Catch block' -> the resolving or handling code must be given in the catch block
'Finally block' -> will always be executed
'Throw'-> is used to intentionally throw an error ->e.g. person not eligible to get license to return warning
*/
 
//Try catch - example
function div(a,b)  //2 parameters a & b
{
    if(b===0){
    throw new Error("Cannot div by 0") //pre-defined class, parents class of the error class -> therefore no console.log needed printing error message
        
    }
        return a/b
}
try{                            // code which may produce an error 'try block'
console.log(div(10,0))          //function with return type -> (function(parameter values))
}
/*catch(error){                  // catch handles the error from try block
    console.log(error.message)  // create varaible error -> fetches the message from Error
}*/
finally {
    console.log("Execution successfully completed")
}

