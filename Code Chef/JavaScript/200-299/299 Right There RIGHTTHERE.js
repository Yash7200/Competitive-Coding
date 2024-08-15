process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const canHostParty = (noOfGuests, hallCapacity) => {
    (noOfGuests <= hallCapacity)
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [noOfGuests, hallCapacity] = testcase;
        canHostParty(noOfGuests, hallCapacity);
    });
});