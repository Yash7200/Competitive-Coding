let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const classifyMixtureType = (unitsOfItemA, unitsOfItemB) => {
    const isSolution = (unitsOfItemA > 0) && (unitsOfItemB > 0);
    const isLiquid = (unitsOfItemA === 0) && (unitsOfItemB !== 0);
    
    const mixtureType = (isSolution) ? 'Solution'
        : (isLiquid) ? 'Liquid'
        : 'Solid'
    ;
    console.log(mixtureType);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((inputs) => {
       const [unitsOfItemA, unitsOfItemB] = inputs; 
       classifyMixtureType(unitsOfItemA, unitsOfItemB);
    });
});
