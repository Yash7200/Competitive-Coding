process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const isAnswerCorrect = (num1, num2, answer) => {
    const sum = num1 + num2;
    (sum === answer)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [num1, num2, answer] = testcase;
        isAnswerCorrect(num1, num2, answer);
    });
});