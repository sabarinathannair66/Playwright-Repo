// if condition
//provides positive condition only
let number = 8;
if (number >10)
{
    console.log("Number is greater than 10")
}

// if else condition
//provide both positive & negative conditions
let age  = 20;
if(age>=18)
{
    console.log("eligible to vote")
}
else
{
    console.log("not eligible to vote")
}

//Switch

let day = 3; //variable
switch(day) // expression inside bracket
{
    case 1: 
    console.log("Monday")
    break;
    case 2:
    console.log("Tuesday")
    break;
    case 3:
    console.log("Wednesday")
    break;
    default:
    console.log("Invalid input")
}