process.stdin.setEncoding('utf-8');

const canChefGoToWaterpark = (weight, height) => {
    ( (60 <= weight) && (130 >= height) )
        ? console.log("YES")
        : console.log("NO");
};

process.stdin.on('data', (input) => {
    const [weight, height] = input.trim().split(' ').map(Number);
    canChefGoToWaterpark(weight, height);
});