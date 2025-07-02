// //  Asynchronous js
// // callbacks
// // console.log("SCRIPT SRART");
// // setTimeout(()=>{
// // console.log("i m going to restaurant");

// // },4000)
// // setTimeout(() => {
// //     console.log("i m checking the menu for ordering");
    
// // }, 3000);
// // function walkinrestaurant(cb) {
// //     console.log("i m waliking insite the restaurant");

// //     setTimeout(() => {cb()
// //     }, 3000);
    
// // }
// // function menuchecking(cb) {
// //     console.log("i m checking the menu");
// //     setTimeout(() => {
// //         cb()
// //     }, 6000);    
// // }

// // function foodorder(cb) {
// //     console.log("ordering the food");
// //     setTimeout(() => {
// //         cb()
// //     }, 8000);
// // }

// // function paybill(cb) {
// //     console.log("i m paying the bill");
// //     setTimeout(cb,3000);
// // }
// // function walkawayfromres() {
// //     console.log("bye bye going home");
    
// // }
// // walkinrestaurant(()=>{
// //     menuchecking(()=>{
// //         foodorder(()=>{
// //             paybill(()=>{
// //                 walkawayfromres()
// //             })
// //         })
// //     })
// // })
// // console.log("end");
// // let arr = [2,3,4,6,8,5]

// // function doubleArrval(arr) {
// //    let arr1 = []

   
// //     for(var i = 0;i<arr.length;i++){
// // arr1.push(arr[i]*2);

// //     }
// //     return arr1;
// // }
// // const output = doubleArrval(arr);
// // console.log(output);
// //  let arr = [2,3,4,6,8,5]

// // Array.prototype.doublevar = function (data) {
// //     let output = []
// //     for(var i = 0 ;i<this.length;i++){
// //         output.push(this[i]*2);
// //     }
// //     return output
    
// // }

// // const output = arr.doublevar(()=>{

// // });
// // console.log(output);

// let arr = [2,3,4,6,8,5]

// Array.prototype.calculate = function (logic) {
//     let output = []
//     for(var i = 0 ;i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output
    
// }
// function triple(x) {
//     return x*x*x;
// }

// const output = arr.calculate(triple);
// console.log(output);



