let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [xUnitsPositive, yUnitsPositive, xUnitsNegative, yUnitsNegative] = input.trim().split(' ').map(Number);
    
    const xPosition = xUnitsPositive - xUnitsNegative;
    const yPosition = yUnitsPositive - yUnitsNegative;
    console.log(`${xPosition} ${yPosition}`);
});
