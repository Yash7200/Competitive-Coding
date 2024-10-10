let input = '';
process.stdin.on('data', (data) => input += data);

const canTeamWin = (wins, draws, lose) => {
    const playedGames = wins + draws + lose;
    const isAllGamesPlayed = playedGames === 4;
    
    const teamPoints = (isAllGamesPlayed)
        ? (wins + (draws / 2))
        : (wins + (4 - playedGames));
        
    const opponentPoints = lose + (draws / 2);
    
    (teamPoints > opponentPoints)
        ? console.log('Yes')
        : console.log('No');
};

process.stdin.on('end', () => {
    const [wins, draws, lose] = input.trim().split(' ').map(Number);
    canTeamWin(wins, draws, lose);
});