//Push - used to add elements to an array function
let numbers =[]  // this is called empty array
numbers.push(10)
numbers.push(15)
numbers.push(20)
console.log(numbers)

//-------------------------------------------

// Pop -> is used to remove last element in array

numbers.pop()
console.log(numbers)

//-------------------------------------------
//Unshift - add elements to the beginning of the array

numbers.unshift(50)
console.log(numbers)

//-------------------------------------------
//Shift - helps remove the first element
numbers.shift()
console.log(numbers)

//-------------------------------------------
//Includes - checks whether an element exists or not
console.log(numbers.includes(50))

//-------------------------------------------
// Index of - is used to return the index value of an element
console.log(numbers.indexOf(10))

//-------------------------------------------
//Reverse - it helps in reversing the array
numbers.reverse()
console.log(numbers)

//-------------------------------------------
//Filter - is a method used to create a new array containing only an element that satisfies the given condition
let number =[]
number.push(10)
number.push(15)
number.push(20)
console.log(number)

console.log(number.filter(num=>num<15))
console.log(number)
//-------------------------------------------
//Find - return only single value, return the first match
console.log(number.find(num=>num>15)) // if no match is found, it will be undefined
