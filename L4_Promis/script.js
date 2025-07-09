const promise1 = new Promise((_resolve,reject)=>{
setTimeout(() => {
    console.log("this is promise object");
    
}, 3000);    
})
promise1
.then((data)=>{
setTimeout(() => {
    console.log("p1");
}, 3000);
})
.then(()=>{
  setTimeout(() => {
    console.log("p2");      
    },2000);
})
.then(()=>{ 
   setTimeout(() => {
    console.log("p3");      
},4000);
}
)

.catch((err)=>{
    console.log("error",err);
})
