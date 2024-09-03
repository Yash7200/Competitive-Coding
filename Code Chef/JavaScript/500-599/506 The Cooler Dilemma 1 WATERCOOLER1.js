process.stdin.setEncoding('utf-8');

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const shouldGetCoolerOnRent = (rentCostPerMonth, purchaseCost, monthsOfSummer) => {
    const totalRentCost = rentCostPerMonth * monthsOfSummer;
    
    (totalRentCost < purchaseCost)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('data', (input) => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [rentCostPerMonth, purchaseCost, monthsOfSummer] = testcase;
        shouldGetCoolerOnRent(rentCostPerMonth, purchaseCost, monthsOfSummer);
    });
});