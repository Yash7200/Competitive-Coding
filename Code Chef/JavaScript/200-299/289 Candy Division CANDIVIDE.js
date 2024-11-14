process.stdin.setEncoding("utf-8");

const strToInput = (strArray) => {
    const intArray = strArray.map(Number);
    return intArray;
};

const canDividedEqually = (noOfCandies) => {
    (noOfCandies % 3 === 0)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInput(input.trim().split("\n").slice(1));
    testcases.forEach((candies) => {
        canDividedEqually(candies);
    });
});