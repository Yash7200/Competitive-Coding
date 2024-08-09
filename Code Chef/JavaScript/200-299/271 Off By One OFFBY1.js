//Problem Simplification:
    //We've a faulty calculator that process the addition but with extra 1 at end.
    //Process addition & convert it into string then append 1

//Logic for string to Integer:
    //We'll receive space separated integers as string. Ex. "1 2"
    //To convert received input into integer from the string we will use method chaining.
    //We'll use trim method first to remove space around input then chain it with split method to split string integer from space. Ex ["1", "2"]
    //Chain the output of split method with map method & inside that use Number keyword to convert string item of subarray to string. Ex [1, 2]
    //Use destructuring over array to store array values into variables.

//Logic to solve Problem:
    //Create function containing core logic to solve problem.
    //In function declaration, create variable to store output & process the input
    //Use String function, inside perform addition of a & b then outside String function append "1" as string using + operator.

process.stdin.setEncoding("utf-8");

const faultyCalc = (a, b) => {
    const faultyAns = String(a + b) + "1";
    console.log(faultyAns);
};

process.stdin.on("data", (input) => {
    const [a, b] = input.trim().split(" ").map(Number);
    faultyCalc(a, b);
});