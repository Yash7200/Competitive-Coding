let input = '';
process.stdin.on('data', (data) => input += data);

const countJalebisToBuy = (budget, laddusBought) => {
    const laddusCost = laddusBought * 10;
    const remainingMoney = budget - laddusCost;
    
    const jalebisToBuy = (remainingMoney <= 0 || remainingMoney <= 20)
        ? 0
        : parseInt(remainingMoney / 20);
    console.log(jalebisToBuy);
};

process.stdin.on('end', () => {
    const [budget, laddusBought] = input.trim().split(' ').map(Number);
    countJalebisToBuy(budget, laddusBought);
});