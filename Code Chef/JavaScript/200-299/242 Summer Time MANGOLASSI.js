//Problem Simplification:
    //Mamalesh will drink lassi if its temperature is more than 35.

//Logic:
    //We'll receive single integer as string.
    //Remove white space around integer using trim method & convert it into Number.
    //create a function containing core logic.
    //Use ternary if-else condition in function to check if temperature is more than 35 & printing message

process.stdin.setEncoding("utf-8");

const isLassiHot = (temperature) => {
    (temperature > 35)
        ? console.log("YES")
        : console.log("NO");
}

process.stdin.on("data", (input) => {
    isLassiHot(Number(input.trim()));
});