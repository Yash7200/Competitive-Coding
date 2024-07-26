//Problem Simplification:
    //We need to add 2 numbers & print the sum

//Logic for string to Integer:
    //We'll receive no. of testcases & testcases Input in separate new lines as string.
    //Use method chaining.
    //Remove white space around input using trim method.
    //Split the input by newline which will convert input to array of strings. which will look similar as ["2" , "1 3", "4 5"]
    //Pass such array to strToInt function call
    //Create a function to convert string array to integer
    //Remove the first element using shift method as we don't need it & we won't process
    //[Note: chaining the shift method during function call will cause runtime error.]
    //create a variable & use the map method to iterate over all array items string Array.
    //Each array item will be a string from that string we need integer into Number data type.
    //Use method chaining inside first map method.
    //Use split method which will split the string from white space & convert into array elements. we will have testcase input as array items. Ex. strArray = [ ["1", "3"], ["2", "4"] ]
    //Use the map method to convert each sub-array item into Number.
    //return this integer array.
    //Now we can apply logic to solve the problem.

//Logic to solve problem statement:
    //Create a function call where array with subarray of integer is passed.
    //Inside function use forEach method & inside it use reduce method
    //We'll use forEach method as we don't need to return anything & need to iterate over each array items.
    //create a variable to use reduce method over subarray because reduce method will return single value & we need to print each sum.

process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strTestcase) => strTestcase.split(" ").map(Number));
    
    return intArray;
};

const countSum = (testcases) => {
    testcases.forEach((testcase) =>{
        const sum = testcase.reduce((sum,num) => sum + num,0);
        console.log(sum);
    });
};

process.stdin.on("data", (input)=>{
    const testcases = strToInt(input.trim().split("\n"));
    
    countSum(testcases);
});