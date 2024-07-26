//Problem Simplification:
    //Check if entered date is Christmas day or not

//Logic:
    //If date is 25 then its christmas
    //trim the input & convert it into Number
    //create a function containing ternary if-else condition.

process.stdin.setEncoding("utf-8");

const isChristmasDay = (date) => {
    (date === 25)
        ? console.log("CHRISTMAS")
        : console.log("ORDINARY");
};

process.stdin.on("data", (input) => {
    const date = parseInt(input.trim());
    
    isChristmasDay(date);
});