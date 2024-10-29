let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countMoneyWithInterest = (money, yearsDeposited) => {
    let currentYear = 0;
    
    while(currentYear < yearsDeposited){
        (money < 1000)
            ? money += 1000
            : money *= 2;

        ++currentYear;
    }
    console.log(money);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [money, yearsDeposited] = testcase;
        countMoneyWithInterest(money, yearsDeposited);
    })
});