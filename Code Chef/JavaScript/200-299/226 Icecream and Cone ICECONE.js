let input = '';
process.stdin.on('data', (data) => input += data);

const findMaxIcecreamsToEat = (cones, scoops) => {
    const maxIcecreams = Math.min(cones, scoops);
    console.log(maxIcecreams);
};

process.stdin.on('end', () => {
    const [cones, scoops] = input.trim().split(' ').map(Number);
    findMaxIcecreamsToEat(cones, scoops);
});
