let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countGuestsCanEat = (cookedPlates, platesPerGuest) => {
    const guestsCanEat = (cookedPlates / platesPerGuest);
    const canFeedAllGuest = guestsCanEat >= 20;
    
    (canFeedAllGuest)
        ? console.log(20)
        : console.log(parseInt(guestsCanEat));
    
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [cookedPlates, platesPerGuest] = testcase;
        countGuestsCanEat(cookedPlates, platesPerGuest);
    });
});