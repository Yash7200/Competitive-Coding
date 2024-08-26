process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const countSumOfDigits = (digits) => {
    let sumOfDigits = 0;
    
    while(digits > 1 || digits > 0){
        sumOfDigits += (digits % 10);
        digits = parseInt(digits / 10);
    }
    
    console.log(sumOfDigits);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((digits) => {
        countSumOfDigits(digits);
    });
});