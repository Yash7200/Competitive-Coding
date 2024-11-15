process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const whoBidsHigh = (bidOfAlice, bidOfBob, bidOfCharlie) => {
    ((bidOfAlice > bidOfBob) && (bidOfAlice > bidOfCharlie))
        ? console.log("Alice")
        : ((bidOfBob > bidOfAlice) && (bidOfBob > bidOfCharlie))
            ? console.log("Bob")
            : console.log("Charlie");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        const [bidOfAlice, bidOfBob, bidOfCharlie] = testcase;
        whoBidsHigh(bidOfAlice, bidOfBob, bidOfCharlie);
    });
});