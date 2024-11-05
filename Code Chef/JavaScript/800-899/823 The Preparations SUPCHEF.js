let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const canWatchFullSeason = (minsLeftToExam, episodes, episodeLength) => {
    const seasonLength = episodes * episodeLength;
    
    (seasonLength < minsLeftToExam)
        ? console.log('YES')
        : console.log('NO');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [minsLeftToExam, episodes, episodeLength] = testcase;
        canWatchFullSeason(minsLeftToExam, episodes, episodeLength);
    });
});
