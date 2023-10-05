// x=5;

// document.getElementById("demo").innerHTML=x; 

// let x;  //not access 'x' before initialization;

//----------------------------------------------------------

// document.getElementById("demo").innerHTML=x;
// var x;
// x=6;

//-----------------------------------------------------------

// carname = "Skoda"; //Assing "Skoda" to carname

// document.getElementById("demo").innerHTML=carname;

// var carname; // Declare carname

//-----------------------------------------------------------

// carName = "Skoda";
// const carName;
// console.log(carName);

//-----------------------------------------------------------

// car();

// function car() {
//     let name="volvo";
//     console.log(name);
// }
// car();

//-----------------------------------------------------------

// console.log(x);   // undefined
// var x;
// x=6;

//-----------------------------------------------------------

// console.log(x);  // Error // Declaration using let / const Can Not Move To Top.
// let x;
// x=5;

//-----------------------------------------------------------

// console.log(x);   //Error
// x=10;             // Not Access Declaration Or Initialization;

//-----------------------------------------------------------

// x=10;
// console.log(x);  //10 // Declartion Done;

//-----------------------------------------------------------

// x=5;
// let x;
// console.log(x);  //Error

//-----------------------------------------------------------

// x=10;
// var x;
// console.log(x);  //10  Declartion Done;

//-----------------------------------------------------------

// console.log(x);
// x=10;
// var x;             // undefined

//-----------------------------------------------------------

// function demo (){
//     let x;      // Globle Scope + Function Scope
//     if(true){ 
//         x=10;
//     }
//     console.log(x);
// }
// demo();

//-----------------------------------------------------------

// function demo () {
//     if(true){
//         let x;  Function Scpoe + Block Scope(if,Switch,While,for......)
//         x=10;
//     }
//     console.log(x);
// }
// demo();  //Error

//-----------------------------------------------------------

// function demo () {
//     if(true){
//         var x;    // Function Scope
//         x=10;
//     }
//     console.log(x);
// }
// demo();  //10

//-----------------------------------------------------------

// function demo (){
//     var x;      //  Function  Scope (Any Varible declared with let/var/const is Access only in function);

//     x=10;

//     console.log(x);
// }
// demo(); //10

//-----------------------------------------------------------
// function demo () {
//     if(true){
//         var x;    
//         x=10;
//     }
//     console.log(x);
// }
// demo();  