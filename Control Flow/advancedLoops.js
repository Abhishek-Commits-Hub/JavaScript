// // for-of LOOP

// const arr = [1, 2, 3, 4, 5];

// // for (const element of arr) {
// //   console.log(element);
// // }

// const str = "Abhishek Dutta";

// for (const char of str) {
//   // console.log(char); 
// }

// const map = new Map();

// map.set("EN", "English");
// map.set("HI", "Hindi");
// map.set("EN", "English");
// map.set("FR", "French");
// map.set("FR", "French");
// map.set("EN", "English");
// map.set("JP", "Japanese");
// map.set("FR", "French");
// map.set("KR", "Korean");
// map.set("EN", "English");
// map.set("EN", "English");     // Map contains unique elements only in the given order.

// // console.log(map);

// for (const [key, value] of map) { //De-structuring of arrays to keys and values
//   // console.log(key + " -> " + value);
// }

// //===================FOR-OF LOOP IS NOT MADE FOR OBJECTS. IT ONLY WORKS IN THE CASE OF MAPS AND ARRAYS===================


// // for-in LOOP

// const obj = {
//   js: "Javascript",
//   html: "HyperText Markup Language",
//   css: "Cascading StyleSheets",
// }

// for (const key in obj) {
//   // console.log(`${key} --> ${obj[key]}`);
// }

// const arr2 = [10, 21, 32, 43, 54];
// for (const idx in arr2) {
//   // console.log(`Index ${idx} --> ${arr2[idx]}`);
// }


// // for-each LOOP
// const lang = ["js", "cpp", "java", "python"];

// lang.forEach((val) => {
//   // console.log(val);
// });

// function printMe(item) {
//   // console.log(item);
// }

// lang.forEach(printMe)


// const myCodingLanguages = [
//   {
//     language: "Java",
//     fileExtention: ".java",
//   },
//   {
//     language: "C++",
//     fileExtention: ".cpp",
//   },
//   {
//     language: "Python",
//     fileExtention: ".py",
//   }
// ];

// myCodingLanguages.forEach( (item) => {
//   console.log(`${item.language} --> ${item.fileExtention}`);
// } )

// ===========================================================================================================================

// MAP, FILTER AND REDUCE

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach(item => {
//   // console.log(item);
//   return item;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filterredArray = myNums.filter( (num) => (num > 4) );

// const filterredArray = myNums.filter((num) => { return num > 4 });

// const filterredArray = [];

// myNums.forEach( (num) => {
//   if(num > 4) filterredArray.push(num);
// });

// console.log(filterredArray);

// const newNums = myNums.map( (num) => num + 10 ).map((num) => num * 2).filter((num) => num > 30); // Chaining of methods

// console.log(newNums);

// const myTotal = myNums.reduce((accumulator, currNum) => {
//   console.log(`Accumulator : ${accumulator}\tCurr Num : ${currNum}`);
//   return (accumulator + currNum)
// }, 0);
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalBill = shoppingCart.reduce( (acc, curr) => acc + curr.price, 0);
console.log(totalBill);


