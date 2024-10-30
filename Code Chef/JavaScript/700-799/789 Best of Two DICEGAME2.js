let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const decideWinnerOrTie = (aliceRoll1, aliceRoll2, aliceRoll3, bobRoll1, bobRoll2, bobRoll3) => {
    const aliceScore = Math.max( Math.max( (aliceRoll1 + aliceRoll2), (aliceRoll1 + aliceRoll3) ), (aliceRoll2 + aliceRoll3)
        );
        
    const bobScore = Math.max( Math.max( (bobRoll1 + bobRoll2), (bobRoll1 + bobRoll3) ), (bobRoll2 + bobRoll3)
        );

    const winnerOrTie = (aliceScore === bobScore)
        ? 'Tie' 
        : (aliceScore > bobScore)
            ? 'Alice' : 'Bob';
    console.log(winnerOrTie);
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((testcase) => {
        const [aliceRoll1, aliceRoll2, aliceRoll3, bobRoll1, bobRoll2, bobRoll3] = testcase;
        decideWinnerOrTie(aliceRoll1, aliceRoll2, aliceRoll3, bobRoll1, bobRoll2, bobRoll3);
    });
});
