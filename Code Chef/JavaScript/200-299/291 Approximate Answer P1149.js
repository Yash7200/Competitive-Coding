process.stdin.setEncoding("utf-8");

const isCorrectAns = (obtainedValue, rightAns, atMostValue) => {
    const absoluteValue = Math.abs(obtainedValue - rightAns);
    
    (absoluteValue <= atMostValue)
        ? console.log("Yes")
        : console.log("No");
};

process.stdin.on("data", (input) => {
    const [obtainedValue, rightAns, atMostValue] = input.trim().split(" ").map(Number);
    isCorrectAns(obtainedValue, rightAns, atMostValue);
});