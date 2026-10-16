const prompt = require("prompt-sync")();

/*

Problem: Terminal Expense Tracker
Create a terminal program that lets a user manage expenses using a menu. Each expense should have an ID, amount, category, and description.

The menu should allow the user to:

Add an expense
List all expenses
Show total spending
Filter expenses by category
Delete an expense by ID
Quit the program
Amounts must be positive numbers. Keep showing the menu until the user chooses to quit.


Choose an option (1-6): 1
Enter amount: 12.50
Enter category: Food
Enter description: Lunch
Expense added with ID: 1

Choose an option (1-6): 1
Enter amount: 8
Enter category: Transport
Enter description: Bus fare
Expense added with ID: 2

Choose an option (1-6): 2
Expenses:
ID: 1 | Amount: 12.50 | Category: Food | Description: Lunch
ID: 2 | Amount: 8.00 | Category: Transport | Description: Bus fare

Choose an option (1-6): 3
Total spending: 20.50

Choose an option (1-6): 4
Enter category to filter by: Food
Expenses in Food:
ID: 1 | Amount: 12.50 | Category: Food | Description: Lunch

Choose an option (1-6): 5
Enter expense ID to delete: 1
Expense 1 deleted.

Choose an option (1-6): 2
Expenses:
ID: 2 | Amount: 8.00 | Category: Transport | Description: Bus fare

Choose an option (1-6): 6
Goodbye!

*/

let choice;
let id = 1;
let currentExpense = 0;
let expensesArray = [];
do {
  choice = Number(prompt("\nChoose an option (1-6): "));
  switch (choice) {
    case 1:

      expensesArray.push({
        addedAmount: Number(prompt("Enter amount: ")),
        category: prompt("Enter category: "),
        description: prompt("Enter description: "),
        userId: id,
      });

      if (!(Number.isFinite(expensesArray[expensesArray.length - 1].addedAmount)) || expensesArray[expensesArray.length - 1].addedAmount <= 0) {
        console.log("Invalid Amount. Try Again !!");
        break;
      }

      currentExpense += expensesArray[expensesArray.length - 1].addedAmount;
      console.log(`Expense added with ID: ${id++}`);

      break;

    case 2:

      if (expensesArray.length === 0) {
        console.log("No expenses found.");
        break;
      }
      for (let i = 0; i < expensesArray.length; i++) {
        console.log(`ID: ${expensesArray[i].userId} | Amount: ${expensesArray[i].addedAmount.toFixed(2)} | Category: ${expensesArray[i].category} | Description: ${expensesArray[i].description}`);
      }

      break;

    case 3:
      console.log(`Total spending: ${currentExpense.toFixed(2)}`);
      break;

    case 4:
      if (expensesArray.length === 0) {
        console.log("No expenses found.");
        break;
      }
      let filterCategory = prompt("Enter category to filter by: ");
      console.log(`Expenses in ${filterCategory}:`);
      const filteredExpenseArray = expensesArray.filter((item) => item.category === filterCategory);
      for (let i = 0; i < filteredExpenseArray.length; i++) {
        console.log(`ID: ${filteredExpenseArray[i].userId} | Amount: ${filteredExpenseArray[i].addedAmount.toFixed(2)} | Category: ${filteredExpenseArray[i].category} | Description: ${filteredExpenseArray[i].description}`);
      }
      break;

    case 5:
      if (expensesArray.length === 0) {
        console.log("No expenses found.");
        break;
      }
      let deletedId = Number(prompt("Enter expense ID to delete: "));
      let deletedIdx = -1;
      for (let i = 0; i < expensesArray.length; i++) {
        if (expensesArray[i].userId === deletedId) {
          deletedIdx = i;
          currentExpense -= expensesArray[deletedIdx].addedAmount;
          for (let j = i + 1; j < expensesArray.length; j++) {
            expensesArray[j - 1] = expensesArray[j];
          }
          expensesArray.pop();
          break;
        }
      }

      if (deletedIdx === -1) {
        console.log("Expense ID not found.");
        break;
      } else {
        console.log(`Expense ${deletedId} deleted.`);
      }

      break;

    case 6:
      console.log("Goodbye!");
      break;

    default:
      console.log("Enter a valid choice !!");
      break;
  }
} while (choice != 6);