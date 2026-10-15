const prompt = require("prompt-sync")();
let age = Number(prompt("Enter your age: "));

if (age >= 18) {
  console.log("YOU CAN DRIVE !!");
} else {
  console.log("YOU CANNOT DRIVE !!");
}