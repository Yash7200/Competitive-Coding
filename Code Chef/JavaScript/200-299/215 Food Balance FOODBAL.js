let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [dish1fat, dish1protin, dish2fat, dish2protin] = input.trim().split(' ').map(Number);
    
    const dish1Diff = Math.abs(dish1fat - dish1protin);
    const dish2Diff = Math.abs(dish2fat - dish2protin);
    
    const dishToEat = (dish1Diff < dish2Diff) ? 'First'
        : (dish2Diff < dish1Diff) ? 'Second' : 'Both'
    ;
    console.log(dishToEat);
});
