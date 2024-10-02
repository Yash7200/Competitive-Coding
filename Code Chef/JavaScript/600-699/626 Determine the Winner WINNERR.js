let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findWinner = (player1score1, player1score2, player2score1, player2score2) => {
    const player1MaxScore = Math.max(player1score1, player1score2);
    const player2MaxScore = Math.max(player2score1, player2score2);
    
    (player1MaxScore === player2MaxScore)
        ? console.log('TIE')
        : (player1MaxScore < player2MaxScore)
            ? console.log('P')
            : console.log('Q');
};

process.stdin.on('end', () => {
    const testcases = strToInt(input.trim().split('\n'));
    
    testcases.forEach((scores) => {
        const [player1score1, player1score2, player2score1, player2score2] = scores;
        findWinner(player1score1, player1score2, player2score1, player2score2);
    });
});