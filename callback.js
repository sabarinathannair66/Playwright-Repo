//Call back function -> passed as an argument on another function, more than 1 call back not advised to be used

function greet(name){
    console.log("Hello " +name) //this is 1 function -> which will be used as an argument in another function
}

function user(callback){
    let user = "Tom"
    callback(user)   //instead of using greet(name), cannot write name directly coz dif function
}
user(greet)  // greet is the callback function

//Callback hell -> Pyramid of Doom -> not advised to use this function

