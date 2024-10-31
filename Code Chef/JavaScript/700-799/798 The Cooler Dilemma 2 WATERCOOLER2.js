let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countMonthsToRentCooler = (rentPerMonth, price) => {
    const isRentNbuySame = price === rentPerMonth;
    
    const minMonths = parseInt(price / rentPerMonth);
    const monthsToRent = (isRentNbuySame)
        ? 0
        : ((price % rentPerMonth) === 0)
            ? (minMonths - 1)
            : minMonths;
    console.log(monthsToRent);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [rentPerMonth, price] = testcase;
        countMonthsToRentCooler(rentPerMonth, price);
    });
});