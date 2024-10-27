let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countChangeToReceive = (bill) => {
    const extraAmount = 100 - bill;
    const changeToReceive = parseInt(extraAmount / 10) * 10;
    
    console.log(changeToReceive);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((bill) => {
        countChangeToReceive(bill);
    });
});