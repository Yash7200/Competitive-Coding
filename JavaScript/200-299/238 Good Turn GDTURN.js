//Problem Simplification:
    //Turn is considered good if Sum of numbers on Chef & Chefina's dice is more than 6
    //Print "YES", if its a good turn otherwise print "NO".

//Logic for String to Int:
    //Create a function to convert string input to integer.
    //while calling a function use method chaining.
    //On function call use trim method to remove white space around input .(It won't affect if there is space between characters).
    //Chain it with split which will split every testcase into array of strings.
    //We have to process it to convert into integer.
    //Remove first element because it is no. of inputs & we won't require it.
    //Use map method for iterating & store it into a variable for applying changes.
    //Use method chaining technique inside map method.
    //Every item in string array is testcases with space so split by space which will become an array of single testcase input.
    //use method chaining & use the map method to convert each input of specific testcase into integer.
    //Return integer array
    //Now we're ready to apply the logic.

//Logic to solve problem statement:
    //Create a function & in function calling pass array of testcases where sub-array is testcase input. Ex. [ [1,2], [2,3] ]
    //Use forEach method because we are not supposed to return anything but we need to iterate over array.
    //Every array item is array of inputs for specific testcase.
    //In each testcase there're 2 numbers & if their total is over 6 then its a good turn.
    //create a variable to use reduce method for getting only a single value which will be sum of all nums.
    //Use ternary if-else for comparison & printing "YES" or "No".

process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
  strArray.shift();
  const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));

  return intArray;
};

const isGoodTurn = (testCases) => {
    testCases.forEach((testCase) => {
        testCase = testCase.reduce((sumOfDiceNums, numOnDice) => sumOfDiceNums + numOnDice, 0);

        (testCase > 6)
            ? console.log("YES")
            : console.log("NO");
    });
}

process.stdin.on("data", (input) => {
  const testCases = strToInt(input.trim().split("\n"));

  isGoodTurn(testCases);
});
