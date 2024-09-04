let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countTotalMoney = (rs10coins, rs5coins) => {
    const totalMoney = (10 * rs10coins) + (5 * rs5coins);
    console.log(totalMoney);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [rs10coins, rs5coins] = testcase;
        countTotalMoney(rs10coins, rs5coins);
    });
});