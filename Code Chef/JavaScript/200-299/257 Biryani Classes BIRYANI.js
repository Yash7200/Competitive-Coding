//Problem Simplification:
    //Chef wants to learn Biryani from MasterChef.
    //We'll be given noOfWeeks & costPerWeek in each testcase

//Logic for string to Integer:
    //We'll receive no. of testcases & testcases Input in separate new lines as string.
    //Use method chaining.
    //Remove white space around input using trim method.
    //Split the input by newline which will convert input to array of strings. which will look similar as ["2" , "1 3", "4 5"]
    //Pass such array to strToInt function call
    //Create a function to convert string array to integer
    //Remove the first element using shift method as we don't need it & we won't process
    //[Note: chaining the shift method during function call will cause runtime error.]
    //create a variable to store output of map method used to iterate over all array items of string Array.
    //Each array item will be a string from that string we need integer into Number data type.
    //Use method chaining inside first map method.
    //Use split method which will split the string from white space & convert into array elements. we will have testcase input as array items. Ex. strArray = [ ["1", "3"], ["2", "4"] ]
    //Use the map method to convert each sub-array item into Number. Ex. intArray = [ [1, 3], [2, 4] ]
    //return this integer array.
    //Now we can apply logic to solve the problem.

//Logic to solve Problem:
    //Create function containing core logic to solve problem.
    //Use forEach method to iterate over items & pass testcases as parameter of arrow function.
    //In side arrow function, destructure variables weeks & costPerWeek from sub array.
    //call the function then pass weeks & costPerWeek
    //In function declaraion, create variable totalAmount holding multiplication of weeks with costPerWeek.
    //print totalAmount

process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strSubArray) => strSubArray.trim().split(" ").map(Number));
    
    return intArray;
}

const countPayableAmount = (weeks, costPerWeek) => {
    const totalAmount = weeks * costPerWeek;
    console.log(totalAmount);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [weeks, costPerWeek] = testcase;
        countPayableAmount(weeks, costPerWeek);
    });
});