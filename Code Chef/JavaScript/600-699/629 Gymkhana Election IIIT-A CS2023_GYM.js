let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const countVotesToWin = (members, voters) => {
    const votesToWin = parseInt(voters / 2) + 1;
    console.log(votesToWin);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [members, voters] = testcase;
        countVotesToWin(members, voters);
    });
});