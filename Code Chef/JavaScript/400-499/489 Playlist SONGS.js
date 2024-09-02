process.stdin.setEncoding('utf-8');

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const howManyTimesSongCplayed = (journeyDuration, songLength) => {
    const songCfinishTime = songLength * 3;
    const timesSongCplayed = parseInt(journeyDuration / songCfinishTime);
    
    console.log(timesSongCplayed);
};

process.stdin.on('data', (input) => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [journeyDuration, songLength] = testcase;
        howManyTimesSongCplayed(journeyDuration, songLength);
    });
});