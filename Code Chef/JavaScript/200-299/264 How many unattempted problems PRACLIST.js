//Problem Simplification:
    //There various problems among them Chef solves specific problems so we need to find no. of unsolved problems.

//Logic for string to Integer:
    //We'll receive 2 space separated integers as string. Ex. "1 2"
    //To convert received input into integer from the string we will use method chaining.
    //We'll use trim method inside to remove space around input then chain it with split method to split string integer from space. Ex ["1", "2"]
    //Chain the output of split method with map method & inside that use Number keyword to convert string item of subarray to string. Ex [1, 2]
    //Use destructuring over array to store array values into variables totalProblems & solvedProblems.

//Logic to solve Problem:
    //Create function containing core logic to solve problem.
    //In function call pass destructured variables.
    //In function declaration, create variable that'll hold value of unsolved problems received by subtracting solvedProblems from totalProblems.
    //print that value of variable.

process.stdin.setEncoding("utf-8");

const countUnsolvedProblems = (totalProblems, solvedProbelms) => {
    const unsolvedProblems = totalProblems - solvedProbelms;
    console.log(unsolvedProblems);
}

process.stdin.on("data", (input) => {
    const [totalProblems, solvedProbelms] = input.trim().split(" ").map(Number);
    
    countUnsolvedProblems(totalProblems, solvedProbelms);
});