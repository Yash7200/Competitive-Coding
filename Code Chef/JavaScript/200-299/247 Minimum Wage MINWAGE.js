//Problem Simplification:
    //Check if chef is earning minimum wage per hour (11 dollars)

//Logic:
    //We will receive single integer as string.
    //To convert that integer to the string use Number function & use trim method inside it to remove space around it.
    //Create function containing core logic to solve problem.
    //Use ternary if-else condition to compare earnings & print the message.

process.stdin.setEncoding("utf-8");

const isAboveMinWage = (earnings) => {
    (earnings > 11)
        ? console.log("YES")
        : console.log("NO");
}

process.stdin.on("data", (input) => {
    const earnings = (Number(input.trim()));
    
    isAboveMinWage(earnings);
});