process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const canFinishBook = (totalPages, pagesPerDay, daysLeft) => {
    const finishedPages = pagesPerDay * daysLeft;
    
    (finishedPages >= totalPages)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        const [totalPages, pagesPerDay, daysLeft] = testcase;
        canFinishBook(totalPages, pagesPerDay, daysLeft);
    });
});