let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [maxCalIntake, sweetsCount, CalPerSweet] = input.trim().split(' ').map(Number);
    
    const consumedCal = sweetsCount * CalPerSweet;
    const moreCalIntake = (consumedCal > maxCalIntake) ? -1 : (maxCalIntake - consumedCal);
    console.log(moreCalIntake);
});
