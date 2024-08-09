//Problem Simplification:
    //Chef can win/dominate election if has exact or more than twice votes of Chefu

//Logic:
    //We'll receive 2 space separated integers as string.
    //We'll use destrcuturing from Array & method chaining.
    //There can be space around string so remove it using trim method.
    //chain it to split method, it will separate integers from space resulting into array of string integers.
    //chain it to map method & pass Number keyword which will convert string to integer.
    //Create a function containing core logic to solve the problem
    //We'll use ternary if else condition to check if Chef got more or exact twice votes of Chefu & print the message.

process.stdin.setEncoding("utf-8");

const didChefDominate = (votesToChef, votesToChefu) => {
    (votesToChef >= (2 * votesToChefu))
        ? console.log("Yes")
        : console.log("No");
}

process.stdin.on("data", (input) => {
    const [votesToChef, votesToChefu] = input.trim().split(" ").map(Number);
    
    didChefDominate(votesToChef, votesToChefu);
});