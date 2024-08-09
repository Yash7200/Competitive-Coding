//Problem Simplification:
    //We need to warn Julius Caesar for Ides of March

//Logic:
    //If its 15th March then its an Ides of March.
    //Trim Input & convert it to integer.
    //Create function to check for logic.
    //Use ternary if-else condition to check for 15th March.

process.stdin.setEncoding("utf-8");

const isIdesOfMarch = (date) => {
   (date === 15)
        ? console.log("Yes")
        : console.log("No");
};
    
process.stdin.on("data", (input) => {
    const date = parseInt(input.trim());
    
    isIdesOfMarch(date);
});