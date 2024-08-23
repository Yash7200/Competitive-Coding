process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const findMarksOfBob = (totalQuestions, marksOfAlice) => {
    const marksOfBob = totalQuestions - marksOfAlice;
    console.log(marksOfBob);
};

process.stdin.on("data", (input) => {
   const testcases = strToInt(input.trim().split("\n"));
   
   testcases.forEach((testcase) => {
       const [totalQuestions, marksOfAlice] = testcase;
       findMarksOfBob(totalQuestions, marksOfAlice);
   });
});