let input = '';
process.stdin.on('data', (data) => input += data);

const canEatSlicesEqually = (totalSlices) => (totalSlices % 2) === 0;

process.stdin.on('end', () => {
    const slicesPerPizza = Number(input.trim());
    
    let pizzas = 1;
    while(true){
        const totalSlices = pizzas * slicesPerPizza;
        if(canEatSlicesEqually(totalSlices)) break;
        
        ++pizzas;
    }
    
    console.log(pizzas);
});
