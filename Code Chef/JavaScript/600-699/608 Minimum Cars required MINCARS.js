let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => Number(strItem.trim()));
    
    return intArray;
};

const countCarsNeeded = (totalFriends) => {
    const neededCars = (totalFriends <= 4)
        ? 1
        : ((totalFriends % 4) === 0)
            ? (totalFriends / 4)
            : parseInt(totalFriends / 4) + 1;
    
    console.log(neededCars);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((totalFriends) => {
        countCarsNeeded(totalFriends);
    });
});