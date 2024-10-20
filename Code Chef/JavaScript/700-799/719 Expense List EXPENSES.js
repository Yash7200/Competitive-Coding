let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countTotalExpence = (expencesCount, totalIncome) => {
    let expenceMade = 1;
    let unusedIncome = totalIncome;
    
    while(expenceMade <= expencesCount){
        unusedIncome /= 2;
        ++expenceMade;
    }
    
    const incomeUsed = totalIncome - unusedIncome;
    return incomeUsed;
};

const countSavings = (expencesCount, income) => {
    const totalIncome = Math.pow(2,income);
    const totalExpence = countTotalExpence(expencesCount, totalIncome);
    
    const savings = totalIncome - totalExpence;
    console.log(savings);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [expencesCount, income] = testcase;
        countSavings(expencesCount, income);
    });
});