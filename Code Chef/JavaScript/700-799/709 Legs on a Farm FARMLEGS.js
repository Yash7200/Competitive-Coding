let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countMinAnimals = (legs) => {
    const chickenLegsCount = legs % 4;
    const chickensCount = (chickenLegsCount / 2);
    
    const minAnimals = (chickenLegsCount === 0)
        ? (legs / 4)
        : (parseInt(legs / 4) + chickensCount);
    console.log(minAnimals);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((legs) => {
        countMinAnimals(legs);
    });
});