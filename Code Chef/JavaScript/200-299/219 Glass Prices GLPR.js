let input = '';
process.stdin.on('data', (data) => input += data);

const whichFrameToBuy = (plasticFrameCost, metalFrameCost) => {
    (metalFrameCost <= (2 * plasticFrameCost))
        ? console.log('METAL')
        : console.log('PLASTIC');
};

process.stdin.on('end', () => {
    const [plasticFrameCost, metalFrameCost] = input.trim().split(' ').map(Number);
    whichFrameToBuy(plasticFrameCost, metalFrameCost);
});