process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const countTotalRent = (distance) => {
    const basePay = 300 * 10;
    const totalRent = (distance <= 300)
        ? basePay
        : (distance * 10);
        
    console.log(totalRent);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((distance) => {
        countTotalRent(distance);
    })
});