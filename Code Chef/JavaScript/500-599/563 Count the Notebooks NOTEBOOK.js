let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countNotebooksToBeMade = (pulpInKg) => {
    const noteBooksCanBeMade = pulpInKg * 10;
    console.log(noteBooksCanBeMade);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((pulpInKg) => {
        countNotebooksToBeMade(pulpInKg);
    });
});