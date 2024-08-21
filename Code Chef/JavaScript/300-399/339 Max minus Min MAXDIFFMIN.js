process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const minMaxDifference = (min, max) => {
    const difference = max - min;
    console.log(difference);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [num1, num2, num3] = testcase;
        const min = Math.min(num1, num2, num3);
        const max = Math.max(num1, num2, num3);
        
        minMaxDifference(min, max);
    });
});