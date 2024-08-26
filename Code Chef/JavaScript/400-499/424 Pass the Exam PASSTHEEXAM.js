process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const checkIfChefPassed = (sectionAmarks, sectionBmarks, sectionCmarks) => {
    const sumOfMarks = sectionAmarks + sectionBmarks + sectionCmarks;
    ((sectionAmarks >= 10) && (sectionBmarks >= 10) && (sectionCmarks >= 10) && (sumOfMarks >= 100))
        ? console.log("PASS")
        : console.log("FAIL");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [sectionAmarks, sectionBmarks, sectionCmarks] = testcase;
        checkIfChefPassed(sectionAmarks, sectionBmarks, sectionCmarks);
    });
});