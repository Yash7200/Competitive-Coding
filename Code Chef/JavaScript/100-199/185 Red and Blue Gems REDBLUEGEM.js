let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [redGems, blueGems, redGemsPrice, blueGemsPrice] = input.trim().split(' ').map(Number);
    
    const redGemsEarning = redGems * redGemsPrice;
    const blueGemsEarning = blueGems * blueGemsPrice;
    
    const maxEarning = Math.max(redGemsEarning, blueGemsEarning);
    console.log(maxEarning);
});
