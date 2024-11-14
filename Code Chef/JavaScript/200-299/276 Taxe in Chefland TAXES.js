//Problem Simplification:
    //Calculate income after tax.

//Logic for string to Integer:
    //In data event listener (for receiving input), We'll receive no. of testcases & testcases Input in separate new lines as string.
    //Use method chaining.
    //Remove white space around input using trim method.
    //Split the input by newline which will convert input to array of strings. which will look similar as ["2" , "1", "2"]
    //Pass such array to strToInt function call
    //Create a function to convert string array to integer
    //Remove the first element using shift method as we don't need it & we won't process
    //[Note: chaining the shift method during function call will cause runtime error.]
    //create a variable which will strore output of map method used to iterate over all array items of string Array.
    //Each array item will be a string from that string we need to convert it into integer using Number function.
    //Inside Number function, use trim method to remove white space around input of testcase.
    //return this integer array.
    //Now we can apply logic to solve the problem.

//Logic to solve Problem:
    //Create function containing core logic to solve problem.
    //Use forEach method to iterate over items & pass testcases as parameter of arrow function.
    //Inside arrow function, call the function & pass testcase
    //In function declaration, create a variable containing ternary condition.
    //If income is more than 100 then 10 will be deducted from income otherwise there won't be any deduction.
    //Print the variable

process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
  const intArray = strArray.map(Number);
  return intArray;
};

const calculateTax = (income) => {
  const incomeAfterTax = (income > 100) ? income - 10 : income;
  console.log(incomeAfterTax);
};

process.stdin.on("data", (input) => {
  const testcases = strToInt(input.trim().split("\n").slice(1));
  
  testcases.forEach((income) => {
    calculateTax(income);
  });
});
