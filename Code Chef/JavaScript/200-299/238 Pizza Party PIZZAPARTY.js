let input = '';
process.stdin.on('data', (data) => input += data);

const isEnoughSlices = (pizzas, totalSlices) => (pizzas * 8) >= totalSlices;

process.stdin.on('end', () => {
    const [boysCount, girlsCount] = input.trim().split(' ').map(Number);
    
    const slicesForBoys = (boysCount + 1) * 4;
    const slicesForGirls = girlsCount * 3;
    
    const totalSlices = slicesForBoys + slicesForGirls;
    
    let pizzasNeeded = 1;
    
    while(!isEnoughSlices(pizzasNeeded, totalSlices)){
        ++pizzasNeeded;
    }
    
    console.log(pizzasNeeded);
});
