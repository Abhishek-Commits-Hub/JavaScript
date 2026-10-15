function add(a, b){ //parameters
  return a + b;
}
let sum = add(5, 6); //arguments
// console.log(sum);

function loginMessage(username = "User"){
  console.log(`Welcome, ${username} !!`);
}

// loginMessage("Abhishek");

/* ================= REST OPERATOR ================= */
function shoppingCart(var1, var2, ...num){ // HERE ... IS THE REST OPERATOR. IT RETURNS THE DATA ARGUMENTS IN AN ARRAY FORMAT.
  return num;
}
console.log(shoppingCart(200, 300, 500, "Abhishek", 2000));

