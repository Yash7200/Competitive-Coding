process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
};

const findLessCostOfRoom = (costOfDoubleRoom, costOfTripleRoom) => {
    const totalCostofDoubleRoom = costOfDoubleRoom * 3;
    const totalCostofTripleRoom = costOfTripleRoom * 2;
    
    const minCostToStay = Math.min(totalCostofDoubleRoom, totalCostofTripleRoom);
    console.log(minCostToStay);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n").slice(1));
    
    testcases.forEach((testcase) => {
        const [costOfDoubleRoom, costOfTripleRoom] = testcase;
        findLessCostOfRoom(costOfDoubleRoom, costOfTripleRoom);
    });
});
