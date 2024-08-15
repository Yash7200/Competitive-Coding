process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const countTotalWords = (pages, wordsPerPage) => {
    const totalWords = pages * wordsPerPage;
    console.log(totalWords);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [pages, wordsPerPage] = testcase;
        countTotalWords(pages, wordsPerPage);
    });
});