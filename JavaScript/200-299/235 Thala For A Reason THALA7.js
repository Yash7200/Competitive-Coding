//Problem Simplification:
    //Print Thala if we receive 7 as input

//Logic:
    //Set Encoding UTF-8
    //Trim input & convert it into number/integer.
    //Pass it to function containing ternary if-else.

process.stdin.setEncoding("utf-8");

const checkForThala = (number) => {
    (number === 7)
        ? console.log("THALA")
        : console.log("SADGE");
};

process.stdin.on("data", (input) => {
    const number = parseInt(input.trim());
    
    checkForThala(number);
});