let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countExtraPlanesNeeded = (presentPlanes, passengers) => {
    const presentPlanesCapacity = presentPlanes * 100;
    const pendingPassengers = passengers - presentPlanesCapacity;
    
    const minExtraPlanesNeeded = (presentPlanesCapacity >= passengers)
        ? 0
        : ((pendingPassengers % 100) === 0)
            ? (pendingPassengers / 100)
            : (parseInt(pendingPassengers / 100) + 1);
            
    console.log(minExtraPlanesNeeded);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [presentPlanes, passengers] = testcase;
        countExtraPlanesNeeded(presentPlanes, passengers);
    });
});