process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const isQualified = (judge1rating, judge2rating, judge3rating, judge4rating, judge5rating) => {
    const totalRating = judge1rating + judge2rating + judge3rating + judge4rating + judge5rating;
    
    (totalRating >= 4)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [judge1rating, judge2rating, judge3rating, judge4rating, judge5rating] = testcase;
        
        isQualified(judge1rating, judge2rating, judge3rating, judge4rating, judge5rating);
    });
});