let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const doesProjectSatisfyNeeds = (powerUnitsPerYear, totalYears, heliumInGrams, unitsPerGram) => {
    const totalPowerRequirement = powerUnitsPerYear * totalYears;
    const totalPowerSupply = heliumInGrams * unitsPerGram;
    
    (totalPowerSupply >= totalPowerRequirement)
        ? console.log('Yes')
        : console.log('No');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [powerUnitsPerYear, totalYears, heliumInGrams, unitsPerGram] = testcase;
        doesProjectSatisfyNeeds(powerUnitsPerYear, totalYears, heliumInGrams, unitsPerGram);
    });
});