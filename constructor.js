
  const ha= new Promise((resolve, reject)=>{
   setTimeout(() =>{
     console.log('here are the videos')
     resolve({videos:[1, 2,3, 4, 5,6]})

   }, 2000)
  })



Promise.all([ha])
.then(result =>{
  return console.log(result)
})