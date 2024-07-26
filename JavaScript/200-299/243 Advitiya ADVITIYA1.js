//Problem Simplification:
    //Advitiya wants to go to IIT Ropar & if she goes on 16, 17 or 18 print "ADVITIYA" otherwise print "WAITING FOR ADVITIYA"

//Logic:
    //We'll receive single integer as string.
    //Use trim method to remove white space around input & convert into integer using Number function.
    //create a function for core logic.
    //In function call pass input in integer format.
    //Inside function declaration use ternary if else with or operator if she goes on any date from 16,17,18 & print the message

process.stdin.setEncoding("utf-8");

const canAdvitiyaGo = (date) => {
    (date === 16 || date === 17 || date === 18)
        ? console.log("ADVITIYA")
        : console.log("WAITING FOR ADVITIYA");
}

process.stdin.on("data", (input) => {
    canAdvitiyaGo(Number(input.trim()));
});