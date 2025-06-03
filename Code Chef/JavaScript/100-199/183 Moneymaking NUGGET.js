let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [nuggets, starPieces] = input.trim().split(' ').map(Number);
    
    const totalMoney = (nuggets * 5000) + (starPieces * 9800);
    console.log(totalMoney);
});
