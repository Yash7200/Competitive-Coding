let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findMinDistance = (placeOfChef, placeOfChefina) => {
    const maxDistance = parseInt((placeOfChef + placeOfChefina) / 2);
    const minDistance = Math.max(placeOfChef, placeOfChefina) - maxDistance;
    
    console.log(minDistance);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [placeOfChef, placeOfChefina] = testcase;
        findMinDistance(placeOfChef, placeOfChefina);
    });
});
