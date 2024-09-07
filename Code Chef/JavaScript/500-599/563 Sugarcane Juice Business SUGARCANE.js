let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countProfit = (glassesSold) => {
    const totalIncome = glassesSold * 50;
    
    const sugarcaneCost = parseInt((totalIncome * 20) / 100);
    const saltNmintCost = sugarcaneCost;
    const shopRent = parseInt((totalIncome * 30) / 100);
    
    const profit = totalIncome - sugarcaneCost - saltNmintCost - shopRent;
    console.log(profit);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((glassesSold) => {
        countProfit(glassesSold);
    });
});