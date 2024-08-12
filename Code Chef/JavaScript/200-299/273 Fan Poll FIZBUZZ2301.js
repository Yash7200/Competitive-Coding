//Problem Simplification:
    //We're supposed to check if Dhoni got most votes or not.

//Logic for string to Integer:
    //In data event listener (for receiving input), We'll receive space separated integers as string. Ex. "1 2"
    //To convert received input first integer from the string we will use method chaining.
    //We'll use trim method inside to remove space around input then chain it with split method to split string integer from space. Ex ["1", "2"]
    //Chain the output of split method with map method & inside that use Number keyword to convert string item of subarray to string. Ex [1, 2]
    //Use destructuring over array to store array values into variables.

//Logic to solve Problem:
    //Create function containing core logic to solve problem.
    //Inside function declaration, we need to use ternary if-else to evaluate condition.
    //compare the votes with both players using > operator then evaluate result of both condition using and condition.
    //Print the message.

process.stdin.setEncoding("utf-8");

const didDhoniWon = (votesToDhoni, votesToRohit, votesToKohli) => {
    ( (votesToDhoni > votesToRohit) && (votesToDhoni > votesToKohli) )
        ? console.log("Yes")
        : console.log("No");
}

process.stdin.on("data", (input) => {
    const [votesToDhoni, votesToRohit, votesToKohli] = input.trim().split(" ").map(Number);
    didDhoniWon(votesToDhoni, votesToRohit, votesToKohli);
});