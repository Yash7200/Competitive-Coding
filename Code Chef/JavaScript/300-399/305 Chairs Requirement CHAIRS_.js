process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const findNeededChairs = (newStudents, allChairs) => {
    const neededChairs = (allChairs >= newStudents)
        ? 0
        : newStudents - allChairs;
        
    console.log(neededChairs);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        const [newStudents, allChairs] = testcase;
        findNeededChairs(newStudents, allChairs);
    });
});