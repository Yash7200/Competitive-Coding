let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countMinCardsToFlip = (cards, faceUpCards) => {
    const minCardsToFlip = (faceUpCards === 0 || cards === faceUpCards)
        ? 0
        :(faceUpCards <= (cards / 2))
            ? faceUpCards
            : (cards - faceUpCards);
    console.log(minCardsToFlip);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [cards, faceUpCards] = testcase;
        countMinCardsToFlip(cards, faceUpCards);
    });
});