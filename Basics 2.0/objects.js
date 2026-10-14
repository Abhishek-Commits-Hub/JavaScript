let obj1 = {
  1: "a",
  2: "b",
}
let obj2 = {
  3: "c",
  4: "d",
}
let user = {
  name: "Abhishek",
  email: "abhishek@google.com",
  regNo: "25040005",
}
let obj3 = {...obj1, ...obj2}; //Just like arrays
// console.log(obj3);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('email'));

let course = {
  courseName: "JS Code and Chai",
  coursePrice: "999",
  courseInstructor: "Hitesh Choudhary",
}

let {coursePrice: price} = course;

console.log(price);






