let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const findMinMaxDistribution = (chocolates) => {
    const maxDistribution = chocolates;
    const minDistribution = ((chocolates % 2) === 0)
        ? (chocolates / 2)
        : parseInt(chocolates / 2) + 1
        
    console.log(`${minDistribution} ${maxDistribution}`);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((chocolates) => {
        findMinMaxDistribution(chocolates);
    });
});