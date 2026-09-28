//Iteration in Array

let colours = ["red","blue","green"]
for(let i=0;i<=2;i++)//condtion colours.length
   {
    console.log(colours[i])
   } 

   //another way to write the above using length

   let colour = ["red","blue","green"]
for(let i=0;i<colour.length;i++)//condtion colours.length
   {
    console.log(colour[i])
   } 

//--------------------------------------------------
   //Array iteration using For of Loop -> type of loop used to collection data from array

for(let value of colours) //fetching all the iteration (red,blue,green) from the array and store in the value variable
{
    console.log(value)
}

//-------------------------------------------------
//For each loop -> 

colours.forEach(function(value)
{
    console.log(value)
}
)
//--------------------------------------------------
//Array Iteration using Arrow function
 colours.forEach(value=>console.log(value))

//--------------------------------------------------

//For in --will also be returning the index value

for(let index in colours)
    {
      console.log(index,colours[index])  
    }
//--------------------------------------------------

    //Map array iteration - transforming the numerical values in an array and creating a new array

    let numbers = [1,2,3]
    let doubled = numbers.map(i=>i*3)
    console.log(doubled)

//--------------------------------------------------


