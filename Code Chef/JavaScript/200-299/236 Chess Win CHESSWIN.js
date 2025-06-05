let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [playerWins, magnusWins] = input.trim().split(' ').map(Number);
    
    const diff = magnusWins - playerWins 
    console.log(diff + 1);
});
