let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number( strItem.trim() ));
    
    return intArray;
};

const getPercentOf = (percent, amount) => ((percent * amount) / 100);

const getGrossSalary = (baseSalary) => {
    const HRA = (baseSalary < 1500)
        ? getPercentOf(10, baseSalary)
        : 500;
    
    const DA = (baseSalary < 1500)
        ? getPercentOf(90, baseSalary)
        : getPercentOf(98, baseSalary);
    
    const grossSalary = baseSalary + HRA + DA;
    console.log(grossSalary);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((baseSalary) => getGrossSalary(baseSalary));
});
