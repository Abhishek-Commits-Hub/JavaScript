// falsy values --> false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values --> "0", "false", " ", [], {}, function(){}

// HOW TO CHECK EMPTY OBJECT

const emptyObj = {};

if (Object.keys(emptyObj).length !== 0) {
  console.log("Object not empty");
} else {
  console.log("Object is empty");
}

// Nullish Coalescing Operator ( ?? ): null/undefined --> FALLBACK

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10;
console.log(val1);

