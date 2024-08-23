process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    
    return intArray;
};

const whichCabToTake = (cab1charges, cab2charges) => {
    (cab1charges === cab2charges)
        ? console.log("ANY")
        : (cab1charges < cab2charges)
            ? console.log("FIRST")
            : console.log("SECOND");
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((testcase) => {
        const [cab1charges, cab2charges] = testcase;
        whichCabToTake(cab1charges, cab2charges);
    });
});