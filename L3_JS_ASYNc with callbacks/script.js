// let arr1 = [4, 7, 3, 89, 4, 3];

// Array.prototype.calculate = function (logic) {
//   let output = [];
//   for (var i = 0; i < this.length; i++) {
//     let result = logic(this[i]);

//     if (result !== undefined) {
//       output.push(result);
//     }
//   }
//   return output;
// };

// function greaterThanSix(x) {
//   if (x > 6) {
//     return x;
//   }

// }
// const res = arr1.calculate(greaterThanSix);
// console.log(res);
// // reduce
const arr1 =[1,2,3,4];

const initalvalue = 0;
const sumwithinitial = arr1.reduce((accumulator,currentvalue)=>accumulator+currentvalue,initalvalue,);
console.log(sumwithinitial);

const sumofall = arr1.reduce(function(acc,curr){
    acc = acc+curr
return acc;
},0);
console.log(sumofall);
