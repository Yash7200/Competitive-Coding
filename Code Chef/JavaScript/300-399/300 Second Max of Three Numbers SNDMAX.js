process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
}

const find2ndMax = (testcase) => {
    const maxNum = Math.max(...testcase);  
    const minNum = Math.min(...testcase);
    
    testcase.forEach((item) => {
        ( (item !== maxNum) && (item !== minNum) )
            ? console.log(item)
            : {};
    });
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        find2ndMax(testcase);
    });
});