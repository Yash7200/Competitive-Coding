let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    return intArray;
};

const countWaysToMakeSumEven = (totalCards, chosenCard) => {
    const isOddCardSelected = (chosenCard % 2) !== 0;
    
    let oddCardsCount = Math.ceil(totalCards / 2);
    let evenCardsCount = totalCards - oddCardsCount;
    
    const waysToMakeSumEven = (isOddCardSelected)
        ? --oddCardsCount : --evenCardsCount;
    console.log(waysToMakeSumEven);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n').slice(1));
    
    testcases.forEach((testcase) => {
        const [ totalCards, chosenCard ] = testcase;
        countWaysToMakeSumEven(totalCards, chosenCard);
    });
});
