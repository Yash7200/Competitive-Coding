//Problem Simplification:
    //Check if any team qualifies to next stage

//Logic:
    //There'll be one input in each test case
    //Remove white space & convert it to integer
    //Call the function that contains the logic
    //If a team score 12 or more then it qualifies
    //Use ternary/simple if-else condition

process.stdin.setEncoding("utf-8");

const isQualified = (score) => {
    /* if(score > 11){
        console.log("YES");
    }else{
        console.log("NO");
    } */

    (score > 11)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const score = parseInt(input.trim());
    
    isQualified(score);
});