const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
         resolve({user:'ed'})
    }, 1000)
})

promise.then(result =>{
    console.log(result)
})