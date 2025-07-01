//  console.log("helo world")
//  console.log(a);
//  var a = 123;
//  console.log(a);
//  function abc(){
//     console.log("THIS IS FUNCTION ABC");    
//     function hgf(){
//     console.log("THIS IS HGF");
        
//     }
//     hgf();
//  }
//  abc();
//  var b = 300;
//  console.log(b); 
 
// {
    // grandparent
//     var a = 100;
//     var b = 200;
//     var c = 300;
//     console.log(d);
//     {
//         // parent
//          var a = 100;
//          var b = 200;
//          var c = 300;


        
//     }
    
    
// // }
// function abc(){
// // console.log(a)

//     var a = 100;
//     var b = 200;
//     var c =300;
//     function def() {
//         var d =400;
//         function ijk(){
//             var c = 800;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


//         }
//         ijk();
//     }
//     def();
// }
// abc();
// for(var i = 0 ; i<=5;i++){
//     setTimeout(() => {

//         console.log(i);
        
//     }, 2000);
// }
// for(let i = 0 ; i<=5;i++){
//     setTimeout(() => {
        
//         console.log(i);
        
//     }, 2000);
// }
// for(var i = 0 ; i<=5;i++){
//    function closuer(i){
//      setTimeout(() => {
        
//         console.log(i);
        
//     }, 2000);
//    }
//    closuer(i);
// }
// HOF
// function xyz(cb){
//     console.log("I AM XYZ FUNCTION");
//     cb();
    
// }
// function cb() {
//     console.log('i m cb funcrion')
// }
// xyz(cb);
function rupesh(cb){
    console.log("rupesh");
    return cb();
    
}
function cb() {
    console.log("lol");
    
}
rupesh(cb);
