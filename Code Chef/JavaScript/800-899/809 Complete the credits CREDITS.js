let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const findTypeOfSem = (semCredits) => {
    const typeOfSem = (semCredits > 65)
        ? 'Overload'
        : (semCredits < 35)
            ? 'Underload'
            : 'Normal';
            
    console.log(typeOfSem);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((semCredits) => {
        findTypeOfSem(semCredits);
    });
});
