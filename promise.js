//Promise -> is a guarantee that the result will be available in the future
//then, catch, finally -> are examples
//then -> when fulfill
//catch - when reject
//finally -> will always be execute

const promise = new Promise((resolve,reject)=>{ //promise method
    let success = false //then will be execute when fulfilled
    if (success){
        resolve("login successful")
    }else{
        reject("login failed")
    }
}
)
promise.then(result=>console.log(result)) //then gets auto executed and stores the promise result
.catch(error=>console.log(error))
.finally(()=>console.log("Request Completed"))