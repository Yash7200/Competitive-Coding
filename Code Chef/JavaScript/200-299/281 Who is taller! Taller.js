process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
}

const whoIsTaller = (heightOfAlice, heightOfBob) => {
    (heightOfAlice > heightOfBob)
        ? console.log("A")
        : console.log("B");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        const [heightOfAlice, heightOfBob] = testcase;
        whoIsTaller(heightOfAlice, heightOfBob);
    });
});