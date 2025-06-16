let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countTimeToMelt = (meltingTemp, crntTemp) => {
    let minsToMelt = 0;
    
    for(let mins = 1; crntTemp < meltingTemp; ++mins){
        crntTemp += mins;
        minsToMelt = mins;
    }
    
    console.log(minsToMelt);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [meltingTemp, crntTemp] = testcase;
        countTimeToMelt(meltingTemp, crntTemp);
    });
});
