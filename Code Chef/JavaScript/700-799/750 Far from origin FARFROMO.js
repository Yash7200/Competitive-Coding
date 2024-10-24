let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const getDistance = (xCoordinate, yCoordinate) => {
    const sum = Math.pow(xCoordinate, 2) + Math.pow(yCoordinate, 2);
    const distance = Math.sqrt(sum);
    
    return distance;
};

const whoIsFarFromChef = (x1OfAlex, y1OfAlex, x2OfBob, y2OfBob) => {
    const distanceOfAlex = getDistance(x1OfAlex, y1OfAlex);
    const distanceOfBob = getDistance(x2OfBob, y2OfBob);
    
    (distanceOfAlex === distanceOfBob)
        ? console.log('EQUAL')
        : (distanceOfAlex > distanceOfBob)
            ? console.log('Alex')
            : console.log('BOB');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [x1OfAlex, y1OfAlex, x2OfBob, y2OfBob] = testcase;
        whoIsFarFromChef(x1OfAlex, y1OfAlex, x2OfBob, y2OfBob);
    });
});