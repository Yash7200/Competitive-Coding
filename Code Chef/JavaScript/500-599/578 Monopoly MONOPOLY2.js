let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const isMonopolyExist = (companyAprofit, companyBprofit, companyCprofit, companyDprofit) => {
    ( (companyAprofit > companyBprofit + companyCprofit + companyDprofit) ||
      (companyBprofit > companyAprofit + companyCprofit + companyDprofit) ||
      (companyCprofit > companyAprofit + companyBprofit + companyDprofit) ||
      (companyDprofit > companyAprofit + companyBprofit + companyCprofit) )
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [companyAprofit, companyBprofit, companyCprofit, companyDprofit] = testcase;
        isMonopolyExist(companyAprofit, companyBprofit, companyCprofit, companyDprofit);
    });
});