process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray =  strArray.map(Number);
    
    return intArray;
};

const isSubscriptionNeeded = (lengthOfLecture) => {
    (lengthOfLecture > 30)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((lengthOfLecture) => {
        isSubscriptionNeeded(lengthOfLecture);
    });
});