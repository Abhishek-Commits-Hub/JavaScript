// for loop
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a Number : "));
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}

// while loop
console.log("========================================================");

let i = 1;
while (i <= 10) {
  console.log(`${n} x ${i} = ${n * i}`);
  i++;
}

// do-while loop
console.log("========================================================");

let idx = 1;
do {
  console.log(`${n} x ${idx} = ${n * idx}`);
  idx++;
} while (idx <= 10);