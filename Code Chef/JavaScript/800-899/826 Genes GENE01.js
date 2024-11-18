let input = '';
process.stdin.on('data', (data) => input += data);

const findChildEyeColor = (parent1Color, parent2Color) => {
    const isSameEyeColors = parent1Color === parent2Color;
    const isBrownEyeColor = (parent1Color === 'R') || (parent2Color === 'R');
    
    const childEyeColor = (isSameEyeColors)
        ? parent1Color
        : isBrownEyeColor
            ? 'R' : 'B';
    console.log(childEyeColor);
                
};

process.stdin.on('end', () => {
    const [parent1Color, parent2Color] = input.trim().split(' ');
    findChildEyeColor(parent1Color, parent2Color);
});
