let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countMaxGoldMedals = (chefRaceChoice1, chefRaceChoice2, rivalRaceChoice1, rivalRaceChoice2) => {
    let goldMedalsCount = 0;
    
    (chefRaceChoice1 === rivalRaceChoice1 || chefRaceChoice1 === rivalRaceChoice2)
        ? {} : ++goldMedalsCount;
    (chefRaceChoice2 === rivalRaceChoice1 || chefRaceChoice2 === rivalRaceChoice2)
        ? {} : ++goldMedalsCount;
        
    console.log(goldMedalsCount);
        
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [chefRaceChoice1, chefRaceChoice2, rivalRaceChoice1, rivalRaceChoice2] = testcase;
        countMaxGoldMedals(chefRaceChoice1, chefRaceChoice2, rivalRaceChoice1, rivalRaceChoice2);
    });
});