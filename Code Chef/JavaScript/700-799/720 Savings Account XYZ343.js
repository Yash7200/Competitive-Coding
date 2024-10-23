let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countIncomeSourcesToClose = (incomeSources, income, accountLimit) => {
    const totalIncome = incomeSources * income;
    
    const keepIncomeSources = parseInt(accountLimit / income);
    const closedIncomeSources = Math.max(0, incomeSources - keepIncomeSources);
    console.log(closedIncomeSources);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [ incomeSources, income, accountLimit ] = testcase;
        countIncomeSourcesToClose(incomeSources, income, accountLimit);
    });
});