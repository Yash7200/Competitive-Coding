//Problem Simplification:
    //We don't want to pay tax & there's a rule that if we invest then if remaining less or exact to tax slab then we don't need to pay taxes.

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
    //Use the map method to convert each sub-array item into Number. Ex. intArray = [ [1, 3], [2, 4] ]
    //return this integer array.
    //Now we can apply logic to solve the problem.

//Logic to solve Problem:
    //Create function containing core logic to solve problem.
    //Use forEach method to iterate over items & pass testcases as parameter of arrow function.
    //In side arrow function, destructure earnings & taxslab from testcase array (integer).
    //Call the function & pass those 2 variables as parameters.
    //In function declaration, create new variable holding value of minimum investement.
    //We'll get the minimum investment by subtracting taxslab from earnings.
    //Print the value of minimum investment.

process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strSubArray) => strSubArray.split(" ").map(Number));
    
    return intArray;
};

const countMinInvesting = (earnings, taxSlab) => {
    const minInvestment = (earnings - taxSlab);
    console.log(minInvestment);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [earnings, taxSlab] = testcase;
        
        countMinInvesting(earnings, taxSlab);
    });
    
});