let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [side1, side2, side3] = input.trim().split(' ').map(Number);
    
    const isValidTriangle = (side1 + side2) > side3 && (side1 + side3) > side2 && (side2 + side3) > side1
    ;
    const canMakeTriangle = (isValidTriangle) ? 'Yes' : 'No';
    console.log(canMakeTriangle);
});
