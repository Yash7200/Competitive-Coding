let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [totalPlayers, playersWon] = input.trim().split(' ').map(Number);
    
    const playersLost = totalPlayers - playersWon;
    const totalPricePool = playersLost * 10000;
    console.log(totalPricePool);
});
