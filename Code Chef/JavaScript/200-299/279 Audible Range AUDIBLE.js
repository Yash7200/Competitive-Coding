process.stdin.setEncoding('utf-8');

let input = '';

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map(Number);
    
    return intArray;
};

const canDogHear = (commandFrequency) => {
    ((commandFrequency >= 67) && (commandFrequency <= 45000))
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split("\n"));
    
    testcases.forEach((commandFrequency) => {
        canDogHear(commandFrequency);
    });
});