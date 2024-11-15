process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const canChefGoToFair = (totalFriends, collectedPasses) => {
    (collectedPasses <= totalFriends)
        ? console.log("NO")
        : console.log("YES");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        const [totalFriends, collectedPasses] = testcase;
        canChefGoToFair(totalFriends, collectedPasses);
    });
});