process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const howMuchToPay = (discountInPercentage) => {
    const baseAmount = 100;
    
    const discount = parseInt((baseAmount * discountInPercentage) / 100);
    const amountToPay = baseAmount - discount;
    
    console.log(amountToPay);
};

process.stdin.on("data", (input) => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((discount) => {
        howMuchToPay(discount);
    });
});