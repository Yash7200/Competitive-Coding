process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const isPracticingProperly = (currentRating, problemDifficulty) => {
    const maxDifficulty = currentRating + 200;
    
    ((problemDifficulty >= currentRating) && (problemDifficulty <= maxDifficulty))
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [currentRating, problemDifficulty] = testcase;
        
        isPracticingProperly(currentRating, problemDifficulty);
    });
});