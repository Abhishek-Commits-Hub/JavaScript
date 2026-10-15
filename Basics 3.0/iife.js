// IIFE --> Immediately Invoked Function Expressions

// Normal method
// function greet(){
//   console.log("Good Morning !!");
// }
// greet();

// IIFE method

(function greet(name = "User") {
  console.log(`Good Morning, ${name} !!`);
})(`Abhishek`); //named IIFE

(() => {
  console.log("DataBase Connected");
})(); //