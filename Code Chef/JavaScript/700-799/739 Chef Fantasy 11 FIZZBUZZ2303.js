let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countMaxChoices = (playersCount) => {
    const maxChoices = playersCount * (playersCount - 1);
    console.log(maxChoices);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((playersCount) => {
        countMaxChoices(playersCount);
    });
});