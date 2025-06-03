let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const currentWeight = Number(input.trim());
    
    const thirdBenchWeight = currentWeight + 20;
    console.log(thirdBenchWeight);
});
