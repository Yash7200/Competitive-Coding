let input = '';
process.stdin.on('data', (data) => input += data);

const canTeamBwin = (teamAscore, teamBoversDone, teamBpresentScore) => {
    const pendingOvers = 20 - teamBoversDone;
    const maxExtraScore = pendingOvers * 6 * 6;
    
    const maxPossibleScore = teamBpresentScore + maxExtraScore;
    const canWin = (maxPossibleScore > teamAscore)
        ? 'YES' : 'NO';
        
    console.log(canWin);
};

process.stdin.on('end', () => {
    const [teamAscore, teamBoversDone, teamBpresentScore] = input.trim().split(' ').map(Number);
    canTeamBwin(teamAscore, teamBoversDone, teamBpresentScore);
});