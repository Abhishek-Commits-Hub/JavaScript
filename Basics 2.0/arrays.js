/*

  unshift('element') - adds the element to the beginning of the array
  shift() - removes the element from the beginning of the array

  push('element') - adds the element to the end of the array
  pop() - removes the element from the end of the array

*/

//slice and splice
// const arr1 = [0,1,2,3,4,5];
// console.log("A", arr1);
// const mySlicedArr1 = arr1.slice(1, 3);
// console.log(mySlicedArr1);
// console.log("B", arr1);

// const arr2 = [0,1,2,3,4,5];
// console.log("\nA", arr2);
// const mySlicedArr2 = arr2.splice(1, 3);
// console.log(mySlicedArr2);
// console.log("B", arr2);

let arr1 = [1,2,3,4];
let arr2 = [5,6,7];
// arr1.push(arr2);
// console.log(arr1);
// let newArr = arr1.concat(arr2);
// console.log(newArr);
let spreadArray = [...arr1, ...arr2];
console.log(spreadArray);





