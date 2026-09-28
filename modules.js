/*Node has 2 modules
1. Common JS module - older way of module type, using keyword 'require'
2. ES module - commonly used latest module type, keyword used is 'import'
JS - need to impport other properties from other classes, we need to export first and then import.

math.js
//---------------------------------------------
function add(a,b){
 return a + b
}
module.exports=add     //common js module

app.js
------------------------------------------------
const add = require('./math'){         // needs to be imported at the beginning of the file
console.log(add(10,20))                // invoking the add function from math.js file
}



*/