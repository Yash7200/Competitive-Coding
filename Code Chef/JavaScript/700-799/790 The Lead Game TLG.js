let input = '';
process.stdin.on('data', (data) => input += data);

const strToInt = (strArray) => {
    strArray.shift();
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const findWinnerWithMaxLead = (gameScores) => {
    let player1TotalScore = 0;
    let player2TotalScore = 0;
    
    let player1MaxLead = 0;
    let player2MaxLead = 0;
    
    gameScores.forEach((game) => {
        const [player1score, player2score] = game;
        
        player1TotalScore += player1score;
        player2TotalScore += player2score;
        
        const isPlayer1Leading = player1TotalScore > player2TotalScore;
        const isPlayer2Leading = player2TotalScore > player1TotalScore;
        
        const currentLead = Math.abs(player1TotalScore - player2TotalScore);
        
        ( isPlayer1Leading && (currentLead > player1MaxLead) )
            ? player1MaxLead = currentLead
            : (isPlayer2Leading && (currentLead > player2MaxLead))
                ? player2MaxLead = currentLead
                : {};
    });
    
    const winner = (player1MaxLead > player2MaxLead)
        ? { player: 1, maxLead: player1MaxLead }
        : (player2MaxLead > player1MaxLead)
            ? { player: 2, maxLead: player2MaxLead }
            : null;
    console.log(`${winner.player} ${winner.maxLead}`);
};

process.stdin.on('end', () => {
    const gameScores = strToInt(input.trim().split('\n'));

    findWinnerWithMaxLead(gameScores);
});
