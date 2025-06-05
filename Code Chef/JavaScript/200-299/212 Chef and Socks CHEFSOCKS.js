let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [priceOfSocks, savings, pocketMoney] = input.trim().split(' ').map(Number);
    const totalSavings = savings + pocketMoney;
    
    const canBuySocks = (totalSavings >= priceOfSocks) ? 'YES' : 'NO';
    console.log(canBuySocks);
    
});
